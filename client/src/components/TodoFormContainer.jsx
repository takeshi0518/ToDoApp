const TodoFormContainer = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] flex items-center justify-center">{children}</div>
    </div>
  );
};

export { TodoFormContainer };
