import { buttons } from '../styles/buttonStyles';

const Button = ({ text, variant = 'submit' }) => {
  return <button className={buttons[variant]}>{text}</button>;
};

export { Button };
