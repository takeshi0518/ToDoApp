import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from './Button';
import { useAuthContext } from '../context/AuthContext';
import { AccountIcon } from './AccountIcon';

export const Header = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        '/api/auth/logout',
        {},
        {
          withCredentials: true,
        }
      );
      logout();
      navigate('/');
    } catch (error) {
      console.error('ログアウトエラー', error);
    }
  };
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between space-x-4">
          <div className="flex items-center">
            <AccountIcon />
            <p className="ml-4">{user?.username}</p>
          </div>
          <Button text="logout" variant="logout" onClick={handleLogout} />
        </div>
      </div>
    </header>
  );
};
