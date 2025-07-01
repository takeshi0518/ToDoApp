import { buttons } from '../styles/variants/buttonStyles';

const Button = ({ text, variant }) => {
  return <button className={`${buttons[variant]}`}>{text}</button>;
};

export { Button };
