import { inputs } from '../styles/uiStyles/inputStyles';

const Input = ({ variant, onChange, value, defaultValue }) => {
  return (
    <>
      <input
        {...(value !== undefined
          ? { value }
          : defaultValue !== undefined
          ? { defaultValue }
          : {})}
        type="text"
        className={inputs[variant]}
        onChange={onChange}
        placeholder="ToDoを入力してください"
      />
    </>
  );
};

export { Input };
