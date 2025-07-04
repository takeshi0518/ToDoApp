import { titles } from '../styles/uiStyles/titleStyles';

const MainTitle = ({ text, variant }) => {
  return <h1 className={titles[variant]}>{text}</h1>;
};

export { MainTitle };
