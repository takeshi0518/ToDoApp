import { inputs } from '../styles/variants/inputStyles';

const Input = ({ variant, onChange }) => {
  return (
    <>
      <input
        type="text"
        className={inputs[variant]}
        onChange={onChange}
        placeholder="ToDoを入力してください"
      />
    </>
  );
};

export { Input };
