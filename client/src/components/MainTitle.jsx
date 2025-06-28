const MainTitle = ({ text, className = '' }) => {
  return (
    <h1
      className={`text-6xl text-center pt-8 pb-8 tracking-wider ${className}`}
    >
      {text}
    </h1>
  );
};

export { MainTitle };
