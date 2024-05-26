import { create } from 'zustand'

type NewCategoruState = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useNewCategory = create<NewCategoruState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
