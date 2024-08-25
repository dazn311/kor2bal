import { create } from 'zustand';
import {devtools} from "zustand/middleware";
import { immer } from 'zustand/middleware/immer'
// import {devtools} from "zustand/middleware";

interface State {
    activeId: number;
    setActiveId: (activeId: number) => void;
}

export const useCategoryStore = create<State>()(devtools(immer((set) => ({
    activeId: 1,
    setActiveId: (activeId) => set({ activeId }),
})),{ name: 'storeCategory' }));
