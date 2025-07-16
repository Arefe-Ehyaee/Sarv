// src/services/auth/logoutUser.ts
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/UserStore';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function useLogoutUser() {
  const clearUser = useUserStore((state) => state.clearUser); 
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await fetch(`${BASE_URL}/api/v1/auth/logout`, {
        method: 'POST',
        credentials: 'include', 
      });
    } catch (error) {
      console.error('Logout API failed:', error);
    } finally {
      clearUser();
      navigate('/login');
    }
  };

  return logout;
}
