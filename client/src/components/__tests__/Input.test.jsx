import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { vi } from 'vitest';

import { TodoProvider } from '../../context/TodoContext';
import { TodoForm } from '../TodoForm';
import { CardList } from '../ToDoCard/CardList';
import { inputs } from '../../styles/uiStyles/inputStyles';
import { Input } from '../Input';
import { AuthContext } from '../../context/AuthContext';

vi.mock('axios');

describe('Todo機能のテスト', () => {
  test('post: タスクが追加されるか', async () => {
    const addTodo = { _id: '3', content: '追加タスク' };
    axios.get = vi.fn().mockResolvedValue({ data: [] });
    axios.post = vi.fn().mockResolvedValue({ data: addTodo });

    const mockAuthContext = {
      user: { username: 'test-user', id: '123' },
      loading: false,
    };

    render(
      <AuthContext.Provider value={mockAuthContext}>
        <TodoProvider>
          <TodoForm />
          <CardList />
        </TodoProvider>
      </AuthContext.Provider>
    );

    const input = screen.getByPlaceholderText('Todoを入力してください');
    const button = screen.getByText('送信');

    await userEvent.type(input, '追加タスク');
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('追加タスク')).toBeInTheDocument();
    });
  });

  describe('Inputコンポーネントの正常性確認', () => {
    describe('input要素とtype属性の確認', () => {
      test('input要素が存在し、type属性がtextかどうか', () => {
        render(
          <Input
            type="text"
            placeholderText="ToDoを入力してください"
            testId="todo-input"
          />
        );
        const input = screen.getByTestId('todo-input');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
      });
    });

    describe('variantが正常に渡ってきているかの確認', () => {
      test('variant="large"で正常にclassが登録されているか', () => {
        render(<Input type="text" variant="large" testId="test-input" />);
        const input = screen.getByTestId('test-input');
        expect(input).toHaveClass(...inputs.large.split(' '));
      });
    });
  });
});
