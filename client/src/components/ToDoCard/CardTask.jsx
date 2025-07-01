const CardTask = ({ styles }) => {
  const { layout, title, desc } = styles;
  return (
    <div className={layout}>
      <p className={title}>Task</p>
      <p className={desc}>たまごを買う</p>
    </div>
  );
};

export { CardTask };
