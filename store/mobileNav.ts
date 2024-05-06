import { create } from "zustand";

export const useMobileNavStore = create((set) => ({
    isOpen: false,
    close: () => set({ isOpen: false }),
    open: () => set({ isOpen: true }),
}));
