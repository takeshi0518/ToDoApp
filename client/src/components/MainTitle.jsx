import { titles } from '../styles/variants/title';

const MainTitle = ({ text, variant = 'large' }) => {
  return <h1 className={titles[variant]}>{text}</h1>;
};

export { MainTitle };
