const MainTitle = ({ text, className = '', fontColor }) => {
  return (
    <h1
      className={`text-6xl text-center pt-8 pb-8 tracking-wider ${className} ${fontColor}`}
    >
      {text}
    </h1>
  );
};

export { MainTitle };
