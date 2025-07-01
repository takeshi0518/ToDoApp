const Container = ({ children }) => {
  return (
    <div className="px-8 sm:px-14 md:px-18 py-8 sm:py-10 md:py-12 mx-auto max-w-screen-2xl text-center">
      {children}
    </div>
  );
};

export { Container };
