import { create } from "zustand";

interface State {
  roomId: string;
  userId: string;
  name: string;
}

export const useStore = create((set) => ({
  room: {},
  inc: () => set((state: State) => ({ room: state.roomId })),
}));
