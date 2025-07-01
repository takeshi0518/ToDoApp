const TodoFormContainer = ({ children }) => {
  return (
    <form className="mb-10 sm:mb-20 md:mb-24 lg:mb-28 flex flex-col sm:flex sm:flex-row sm:items-stretch sm:justify-center">
      {children}
    </form>
  );
};

export { TodoFormContainer };
