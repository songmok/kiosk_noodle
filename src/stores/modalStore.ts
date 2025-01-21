import { create } from "zustand";

interface ModalStateType {
  modal: React.ReactNode | null;
  showModal: boolean;
  setModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStateType>((set) => ({
  modal: null,
  showModal: false,
  setModal: (content) => set({ modal: content, showModal: true }),
  closeModal: () => set({ modal: null, showModal: false }),
}));
