import { create } from "zustand";

interface langStoreType {
  selectedLang: string;
  setSelectedLang: (id: string) => void;
}

export const langStore = create<langStoreType>((set) => ({
  selectedLang: "1",
  setSelectedLang: (id) => set({ selectedLang: id }),
}));
