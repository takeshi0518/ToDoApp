const TodoFormContainer = ({ children }) => {
  return (
    <div className="flex justify-center mb-20">
      <div className="w-[80%] flex items-center justify-center">{children}</div>
    </div>
  );
};

export { TodoFormContainer };
