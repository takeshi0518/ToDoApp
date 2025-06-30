const TodoFormContainer = ({ children }) => {
  return (
    <section className="flex justify-center mb-20">
      <div className="w-[80%] flex items-center justify-center">{children}</div>
    </section>
  );
};

export { TodoFormContainer };
