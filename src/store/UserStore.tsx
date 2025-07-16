import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the shape of the user object
export type User = {
  userId: number;
  username: string;
};

// Define the Zustand store state and actions
type UserStore = {
  user: User | null;
  token: string | null;
  setUser: (user: User, token: string) => void;
  clearUser: () => void;
};

// Create the Zustand store with persistence
const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user, token) => set({ user, token }),
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: 'user-storage', // key used in localStorage
    }
  )
);

export default useUserStore;
