import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  userId: number;
  username: string;
};

type UserStore = {
  user: User | null;
  token: string | null;
  setUser: (user: User, token: string) => void;
  clearUser: () => void;
};

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user, token) => set({ user, token }),
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: 'user-storage',
    }
  )
);

export default useUserStore;
