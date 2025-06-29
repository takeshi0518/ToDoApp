import { inputs } from '../styles/variants/input';

const Input = ({ variant }) => {
  return <input type="text" className={inputs[variant]} />;
};

export { Input };
