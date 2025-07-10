import { render, screen } from '@testing-library/react';
import { MainTitle } from './MainTitle';

test('h1要素が存在し、propsで渡したテキストの表示ができているか', () => {
  render(<MainTitle text="ToDoApp" />);
  const mainTitle = screen.getByText('ToDoApp');
  expect(mainTitle).toBeInTheDocument();
  expect(mainTitle.tagName).toBe('H1');
});
