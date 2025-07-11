import { render, screen } from '@testing-library/react';

import { titles } from '../../styles/uiStyles/titleStyles';
import { MainTitle } from '../MainTitle';

describe('MainTitleコンポーネントの正常性確認', () => {
  describe('h1要素とpropsの確認', () => {
    test('h1要素が存在し、propsで渡したテキストの表示ができているか', () => {
      render(<MainTitle text="ToDoApp" />);
      const mainTitle = screen.getByText('ToDoApp');
      expect(mainTitle).toBeInTheDocument();
      expect(mainTitle.tagName).toBe('H1');
    });
  });

  describe('variantが正常に渡ってきているかの確認', () => {
    test('variant="mainTitle"で正常にclassが登録されているか', () => {
      render(<MainTitle text="ToDoApp" variant="mainTitle" />);
      const mainTitle = screen.getByText('ToDoApp');
      expect(mainTitle).toHaveClass(...titles.mainTitle.split(' '));
    });
  });
});
