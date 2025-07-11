import { render, screen } from '@testing-library/react';

import { Button } from '../Button';
import { buttons } from '../../styles/uiStyles/buttonStyles';

describe('Buttonコンポーネントの正常性確認', () => {
  describe('button要素とtype属性の確認', () => {
    test('button要素が存在し、type属性がsubmitかどうか', () => {
      render(<Button text="送信" type="submit" />);
      const submitButton = screen.getByText('送信');
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute('type', 'submit');
    });

    describe('variantが正常に渡ってきているかの確認', () => {
      test('variant="grayLarge"で正常にclassが登録されているか', () => {
        render(<Button text="送信" type="submit" variant="grayLarge" />);
        const button = screen.getByText('送信');
        expect(button).toHaveClass(...buttons.grayLarge.split(' '));
      });
    });
  });
});
