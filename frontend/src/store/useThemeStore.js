import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "light", // Set default theme to light
  setTheme: (theme) => set({ theme }),
}));