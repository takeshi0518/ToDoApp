import { titles } from '../styles/variants/title';

const SubTitle = ({ text, variant }) => {
  return <h2 className={titles[variant]}>{text}</h2>;
};

export { SubTitle };
