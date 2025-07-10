import { render, screen } from '@testing-library/react';
import { SubTitle } from './SubTitle';

test('h2要素が存在し、propsで渡したテキストの表示ができているか', () => {
  render(<SubTitle text="ToDosList" />);
  const subTitle = screen.getByText('ToDosList');
  expect(subTitle).toBeInTheDocument();
  expect(subTitle.tagName).toBe('H2');
});
