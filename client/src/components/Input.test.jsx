import { render, screen } from '@testing-library/react';
import { Input } from './Input';

test('input要素が存在し、type属性がtextかどうか', () => {
  render(<Input type="text" />);
  const input = screen.getByPlaceholderText('ToDoを入力してください');
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
});
