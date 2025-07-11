import { render, screen } from '@testing-library/react';

import { titles } from '../../styles/uiStyles/titleStyles';
import { SubTitle } from '../SubTitle';

describe('SubTitleコンポーネントの正常性確認', () => {
  describe('h2要素の確認とpropsの確認', () => {
    test('h2要素が存在し、propsで渡したテキストの表示ができているか', () => {
      render(<SubTitle text="ToDosList" />);
      const subTitle = screen.getByText('ToDosList');
      expect(subTitle).toBeInTheDocument();
      expect(subTitle.tagName).toBe('H2');
    });
  });

  describe('variantが正常に渡ってきているかの確認', () => {
    test('variant="subTitle"で正常にclassが登録されているか', () => {
      render(<SubTitle text="ToDosList" variant="subTitle" />);
      const subTitle = screen.getByText('ToDosList');
      expect(subTitle).toHaveClass(...titles.subTitle.split(' '));
    });
  });
});
