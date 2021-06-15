import { ModalBase, ModalContainer } from "./Modal.styles";
import ReactDOM from "react-dom";

function Modal({ children, isOpen, onCloseModal, onOpenModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <ModalBase>
          <ModalContainer>{children}</ModalContainer>
        </ModalBase>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
