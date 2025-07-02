import { buttons } from '../styles/variants/buttonStyles';

const Button = ({ text, variant, type = 'button', complete }) => {
  return (
    <button className={`${buttons[variant]}`} type={type} onClick={complete}>
      {text}
    </button>
  );
};

export { Button };
