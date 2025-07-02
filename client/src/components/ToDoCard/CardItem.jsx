import { Button } from '../Button';
import { CardDate } from './CardDate';
import { CardTask } from './CardTask';
import { card } from '../../styles/variants/cardStyles';

const CardItem = ({ variant, todo, complete }) => {
  const styles = card[variant];
  const { content, date } = todo;

  return (
    <li className={styles.container}>
      <CardDate styles={styles.date} date={date} />
      <CardTask styles={styles.task} content={content} />
      <div className="flex justify-between">
        <Button text="編集" variant="blue" />
        <Button text="完了" variant="green" complete={complete} />
      </div>
    </li>
  );
};

export { CardItem };
