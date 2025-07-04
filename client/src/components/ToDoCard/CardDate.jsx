const CardDate = ({ styles, date }) => {
  const { layout, registration, time } = styles;
  return (
    <div className={layout}>
      <p className={registration}>Registration date</p>
      <time dateTime={date} className={time}>
        {date}
      </time>
    </div>
  );
};

export { CardDate };
