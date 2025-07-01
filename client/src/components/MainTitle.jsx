import { titles } from '../styles/variants/titleStyles';

const MainTitle = ({ text, variant }) => {
  return <h1 className={titles[variant]}>{text}</h1>;
};

export { MainTitle };
