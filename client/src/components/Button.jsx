import { buttons } from '../styles/variants/buttonStyles';

const Button = ({ text, variant, margin }) => {
  return <button className={`${buttons[variant]} ${margin}`}>{text}</button>;
};

export { Button };
