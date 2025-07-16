// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import useUserStore from '../store/UserStore';

const ProtectedRoute = () => {
  const user = useUserStore((state) => state.user);

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
