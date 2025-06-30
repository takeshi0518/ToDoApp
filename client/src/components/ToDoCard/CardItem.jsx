import { Button } from '../Button';
import { CardDate } from './CardDate';
import { CardTask } from './CardTask';
import { card } from '../../styles/variants/card';

const CardItem = ({ variant }) => {
  const styles = card[variant];
  return (
    <li className={styles.container}>
      <CardDate styles={styles.date} />
      <CardTask styles={styles.task} />
      <div className="flex justify-between">
        <Button text="編集" variant="blue" />
        <Button text="完了" variant="green" />
      </div>
    </li>
  );
};

export { CardItem };
