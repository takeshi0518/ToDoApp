import { CardItem } from './CardItem';
import { SubTitle } from '../SubTitle';
import { CardItemWrapper } from './CardItemWrapper';

const CardList = () => {
  return (
    <section>
      <SubTitle text="ToDosList" variant="medium" />
      <CardItemWrapper>
        <CardItem variant="default" />
        <CardItem variant="default" />
        <CardItem variant="default" />
      </CardItemWrapper>
    </section>
  );
};

export { CardList };
