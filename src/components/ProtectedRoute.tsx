import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useUserStore from '../store/UserStore';
import { toast } from 'react-toastify';
import { useEffect, useRef } from 'react';

const ProtectedRoute = () => {
  const user = useUserStore((state) => state.user);
  const location = useLocation();
  const toastShown = useRef(false); // Prevent multiple toasts

  useEffect(() => {
    if (!user && !toastShown.current) {
      toast.warn("برای دسترسی به این بخش، ابتدا وارد حساب کاربری شوید.", {
          className: 'toast',
          progressClassName: 'fancy-progress-bar',
        });
      toastShown.current = true;
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
