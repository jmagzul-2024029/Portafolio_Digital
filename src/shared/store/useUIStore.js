import { create } from 'zustand'

/**
 * Store de UI global.
 * Controla el menú de navegación en vista móvil,
 * siguiendo el mismo patrón usado para el sidebar de BanKinal.
 */
const useUIStore = create((set) => ({
    isMenuOpen: false,
    openMenu: () => set({ isMenuOpen: true }),
    closeMenu: () => set({ isMenuOpen: false }),
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))

export default useUIStore
