import { buttons } from '../styles/uiStyles/buttonStyles';

const Button = ({ text, variant, type = 'button', onClick, desabled }) => {
  return (
    <button
      className={`${buttons[variant]}`}
      type={type}
      onClick={onClick}
      disabled={desabled}
    >
      {text}
    </button>
  );
};

export { Button };
