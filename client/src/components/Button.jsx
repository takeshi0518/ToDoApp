import { buttons } from '../styles/uiStyles/buttonStyles';

const Button = ({ text, variant, type = 'button', onClick }) => {
  return (
    <button className={`${buttons[variant]}`} type={type} onClick={onClick}>
      {text}
    </button> 
  );
};

export { Button };
