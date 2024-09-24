/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { LOCAL_STORAGE_KEYS } from "../utils/constant";

interface RoomStore {
  user: any;
  setUser: (data: any) => void;
  clearUser: () => void;
}

const useRoomStore = create<RoomStore>()(
  devtools(
    persist(
      (set) => ({
        user: null as any,
        setUser: (data: any) => set({ user: data }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: LOCAL_STORAGE_KEYS.ROOM_STORE,
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useRoomStore;
