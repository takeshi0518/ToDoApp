import { mainTitle } from '../styles/title';

const MainTitle = ({ text, variant = 'large' }) => {
  return <h1 className={mainTitle[variant]}>{text}</h1>;
};

export { MainTitle };
