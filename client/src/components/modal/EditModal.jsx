import { MainTitle } from '../MainTitle';
import { Button } from '../Button';
import { Input } from '../Input';
import { modal } from '../../styles/uiStyles/modalStyles';

const EditModal = ({ variant, onChange, handleEdit, closeEditModal, todo }) => {
  const { overlay, card } = modal[variant];

  return (
    <div className={overlay}>
      <form className={card}>
        <MainTitle text="Edit ToDo" variant="modalTitle" />
        <Input
          onChange={(e) => onChange(e.target.value)}
          variant="middle"
          type="text"
          defaultValue={todo.content}
        />
        <div className="flex justify-between w-full">
          <Button text="キャンセル" variant="gray" onClick={closeEditModal} />
          <Button
            text="保存"
            variant="green"
            type="submit"
            onClick={handleEdit}
          />
        </div>
      </form>
    </div>
  );
};

export { EditModal };
