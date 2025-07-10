import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button text="送信" variant="grayLarge" type="submit" />);
  const submitButton = screen.getByText('送信');
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveAttribute('type', 'submit');
});
