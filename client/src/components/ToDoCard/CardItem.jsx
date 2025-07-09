import { memo } from 'react';

import { Button } from '../Button';
import { CardDate } from './CardDate';
import { CardTask } from './CardTask';
import { card } from '../../styles/uiStyles/cardStyles';

const CardItem = memo(({ variant, todo, complete, edit }) => {
  const styles = card[variant];
  const { content, createdAt } = todo;

  return (
    <li className={styles.container}>
      <CardDate styles={styles.date} date={createdAt} />
      <CardTask styles={styles.task} content={content} />
      <div className="flex justify-between">
        <Button text="編集" variant="blue" onClick={edit} type="button" />
        <Button text="完了" variant="green" onClick={complete} type="button" />
      </div>
    </li>
  );
});

export { CardItem };
