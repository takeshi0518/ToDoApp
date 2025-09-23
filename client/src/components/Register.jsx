import { Button } from './Button';
import { Input } from './Input';
import { SubTitle } from './SubTitle';

export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96%">
        <SubTitle text="新規登録" variant="registerTitle" />
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">ユーザー名</label>
            <Input
              placeholderText="ユーザー名を入力してください"
              type="text"
              variant="default"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">パスワード</label>
            <Input
              placeholderText="パスワードを入力してください"
              type="password"
              variant="default"
            />
          </div>
          <Button variant="register" type="submit" text="登録" />
        </form>

        <p className="mt-4 text-center text-gray-600">
          アカウントをお持ちの方は{' '}
          <button className="text-blue-500 hover:underline cursor-pointer">
            ログイン
          </button>
        </p>
      </div>
    </div>
  );
};
