import x from "@/assets/image/x.svg";
import { useModalStore } from "@/stores/modalStore";
import { ReactNode } from "react";

interface ModalLayoutProps {
  children: ReactNode;
}

const ModalLayout = ({ children }: ModalLayoutProps) => {
  const { closeModal } = useModalStore();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white rounded-lg w-[900px] h-[1400px]"
    >
      <button
        onClick={closeModal}
        className="absolute top-[44px] right-[25px] flex justify-center items-center w-[60px] h-[60px]"
      >
        <img src={x} alt="x_img" className="w-[26px] h-[26px]" />
      </button>
      {children}
    </div>
  );
};

export default ModalLayout;
