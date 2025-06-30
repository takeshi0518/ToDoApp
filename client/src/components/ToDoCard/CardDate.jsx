const CardDate = ({ styles }) => {
  const { layout, registration, time } = styles;
  return (
    <div className={layout}>
      <p className={registration}>Registration date</p>
      <time dateTime="2025/06/22" className={time}>
        2025/06/22
      </time>
    </div>
  );
};

export { CardDate };
