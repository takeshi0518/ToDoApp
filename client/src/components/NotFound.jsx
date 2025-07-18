import { Link } from 'react-router-dom';

import { Button } from './Button';

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-5xl mb-2">404</p>
          <p className="text-5xl">Sorry.... Page Not Found.</p>
          <Link to="/" className="text-blue-500 underline mt-5 inline-block">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export { NotFound };
