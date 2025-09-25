import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { SubTitle } from './SubTitle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SpinnerIcon } from './SpinnerIcon';
import { useAuthContext } from '../context/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        `/api/auth/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      login(response.data);
      navigate('/todos');
    } catch (error) {
      setIsLoading(false);
      setError(error.response?.data?.error || 'ユーザー登録に失敗しました');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96%">
        <SubTitle text="ログイン" variant="loginTitle" />

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">ユーザー名</label>
            <Input
              placeholderText="ユーザー名を入力してください"
              type="text"
              variant="default"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">パスワード</label>
            <Input
              placeholderText="パスワードを入力してください"
              type="password"
              variant="default"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant="login"
            type="submit"
            text={
              isLoading ? (
                <div className="flex items-center justify-center">
                  <SpinnerIcon className="animate-spin " />
                </div>
              ) : (
                'login'
              )
            }
            disabled={isLoading}
          />
        </form>

        <p className="mt-4 text-center text-gray-600">
          アカウントをお持ち出ない方は{' '}
          <button
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate('/register')}
          >
            新規登録
          </button>
        </p>
      </div>
    </div>
  );
};
