import { render, screen } from '@testing-library/react';

import { inputs } from '../../styles/uiStyles/inputStyles';
import { Input } from '../Input';

describe.skip('Todo機能のテスト（認証機能実装後に修正予定）', () => {
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

  describe('Inputコンポーネントの正常性確認', () => {
    describe('input要素とtype属性の確認', () => {
      test('input要素が存在し、type属性がtextかどうか', () => {
        render(<Input type="text" placeholderText="ToDoを入力してください" />);
        const input = screen.getByPlaceholderText('ToDoを入力してください');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
      });
    });

    describe('variantが正常に渡ってきているかの確認', () => {
      test('variant="large"で正常にclassが登録されているか', () => {
        render(<Input type="text" variant="large" />);
        const input = screen.getByPlaceholderText('ToDoを入力してください');
        expect(input).toHaveClass(...inputs.large.split(' '));
      });
    });
  });
});
