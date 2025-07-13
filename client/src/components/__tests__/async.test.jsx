import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TodoForm } from '../TodoForm';
import { CardList } from '../ToDoCard/CardList';
import { TodoProvider } from '../../context/TodoContext';

vi.mock('axios');

describe('非同期関数の動作確認', () => {
  test('get: 初期表示されるか', async () => {
    const mockTodos = [
      { _id: '1', content: '初期タスクA' },
      { _id: '2', content: '初期タスクB' },
    ];

    axios.get.mockResolvedValue({ data: mockTodos });

    render(
      <TodoProvider>
        <TodoForm />
        <CardList />
      </TodoProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('初期タスクA')).toBeInTheDocument();
      expect(screen.getByText('初期タスクA')).toBeInTheDocument();
    });
  });

  test('post: タスクが追加されるか', async () => {
    const addTodo = { _id: '3', content: '追加タスク' };
    axios.post.mockResolvedValue({ data: addTodo });

    render(
      <TodoProvider>
        <TodoForm />
        <CardList />
      </TodoProvider>
    );

    const input = screen.getByPlaceholderText('ToDoを入力してください');
    const button = screen.getByText('送信');

    await userEvent.type(input, '追加タスク');
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('追加タスク')).toBeInTheDocument();
    });
  });

  test('delete: タスクが削除されるか', async () => {
    axios.get.mockResolvedValue({
      data: [{ _id: '1', content: '削除対象タスク' }],
    });

    axios.delete.mockResolvedValue('1');

    render(
      <TodoProvider>
        <TodoForm />
        <CardList />
      </TodoProvider>
    );

    const confirmButton = await screen.findByText('完了');
    userEvent.click(confirmButton);

    await waitFor(() => {
      expect(screen.queryByText('削除対象タスク')).not.toBeInTheDocument();
    });
  });

  test('patch:  タスクが更新されるか', async () => {
    const target = document.createElement('div');
    target.setAttribute('id', 'modal-hook');
    document.body.appendChild(target);

    axios.get.mockResolvedValue({
      data: [{ _id: '1', content: '編集前のタスク' }],
    });

    axios.patch.mockResolvedValue({
      data: { _id: '1', content: '編集後のタスク' },
    });

    render(
      <TodoProvider>
        <TodoForm />
        <CardList />
      </TodoProvider>
    );

    const editButton = await screen.findByText('編集');
    await userEvent.click(editButton);

    screen.debug();

    expect(screen.getByText('保存')).toBeInTheDocument();

    const editInput = screen.getByDisplayValue('編集前のタスク');
    await userEvent.clear(editInput);
    await userEvent.type(editInput, '編集後のタスク');
    await userEvent.click(screen.getByText('保存'));

    await waitFor(() => {
      expect(screen.getByText('編集後のタスク')).toBeInTheDocument();
    });
  });
});
