import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
  const target = document.getElementById('modal-hook');
  return createPortal(children, target);
};

export { ModalPortal };
