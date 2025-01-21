import { useModalStore } from "@/stores/modalStore";
import { createPortal } from "react-dom";

const Modal = () => {
  const { modal, showModal, closeModal } = useModalStore();

  return (
    showModal &&
    createPortal(
      <div
        onClick={closeModal}
        className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/60 backdrop-blur-sm"
      >
        {modal}
      </div>,
      document.body
    )
  );
};

export default Modal;
