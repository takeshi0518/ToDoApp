const CardItemWrapper = ({ children }) => {
  return (
    <ul className="p-8 grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4">
      {children}
    </ul>
  );
};

export { CardItemWrapper };
