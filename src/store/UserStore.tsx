import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  email: string;
  // Add more fields if needed: name, token, etc.
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // for localStorage key
    }
  )
);

export default useUserStore;
