import { create } from "zustand";

type SettingsStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

export const useSettings = create<SettingsStore>((set, get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set({ isOpen: !get().isOpen }),
}));
