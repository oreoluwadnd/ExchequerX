import React from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  handleModal?: React.MouseEventHandler<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ handleModal, children }) => {
  return createPortal(
    <div className="ModalWrapper">
      <div className="ModalWrapperBackdrop" onClick={handleModal}></div>
      <div className="ModalWrapperChildren">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
