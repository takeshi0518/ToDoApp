import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

import { SpinnerIcon } from './SpinnerIcon';

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center">
          <SpinnerIcon className="animate-spin mr-5" />
          <p className="text-2xl">読込中....</p>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/" />;
};
