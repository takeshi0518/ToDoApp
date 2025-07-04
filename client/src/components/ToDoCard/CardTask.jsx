const CardTask = ({ styles, content }) => {
  const { layout, title, desc } = styles;
  return (
    <div className={layout}>
      <p className={title}>Task</p>
      <p className={desc}>{content}</p>
    </div>
  );
};

export { CardTask };
