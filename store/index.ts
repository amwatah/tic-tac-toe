import { atom } from "jotai";

export const gameWonAtom = atom<boolean>(false);
export const activePlayerAtom = atom<1 | 2>(1);
export const PlayerOneMovesAtom = atom<number[]>([]);
export const PlayerTwoMovesAtom = atom<number[]>([]);
export const clearAllAtom = atom<boolean>(false);
