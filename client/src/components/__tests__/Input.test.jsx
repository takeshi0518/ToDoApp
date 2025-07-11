import { render, screen } from '@testing-library/react';

import { inputs } from '../../styles/uiStyles/inputStyles';
import { Input } from '../Input';

describe('Inputコンポーネントの正常性確認', () => {
  describe('input要素とtype属性の確認', () => {
    test('input要素が存在し、type属性がtextかどうか', () => {
      render(<Input type="text" />);
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
