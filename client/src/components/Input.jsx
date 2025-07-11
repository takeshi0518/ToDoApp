import { inputs } from '../styles/uiStyles/inputStyles';

const Input = ({ variant, onChange, value, defaultValue, ref, type }) => {
  return (
    <>
      <input
        {...(value !== undefined
          ? { value }
          : defaultValue !== undefined
          ? { defaultValue }
          : {})}
        type={type}
        className={inputs[variant]}
        onChange={onChange}
        ref={ref}
        placeholder="ToDoを入力してください"
      />
    </>
  );
};

export { Input };
