import { inputs } from '../styles/variants/inputStyles';

const Input = ({ variant }) => {
  return <input type="text" className={inputs[variant]} />;
};

export { Input };
