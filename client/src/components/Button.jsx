import { buttons } from '../styles/variants/buttonStyles';

const Button = ({ text, variant }) => {
  return (
    <button className={`${buttons[variant]}`} type="submit">
      {text}
    </button>
  );
};

export { Button };
