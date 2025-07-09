import { inputs } from '../styles/uiStyles/inputStyles';

const Input = ({ variant, onChange, value, defaultValue, ref }) => {
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
        ref={ref}
        placeholder="ToDoを入力してください"
      />
    </>
  );
};

export { Input };
