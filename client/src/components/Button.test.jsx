import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('button要素が存在し、type属性がsubmitかどうか', () => {
  render(<Button text="送信" type="submit" />);
  const submitButton = screen.getByText('送信');
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveAttribute('type', 'submit');
});
