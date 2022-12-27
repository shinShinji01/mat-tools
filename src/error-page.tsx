import { useRouteError } from 'react-router-dom';
import Link from './components/UI/link';

const ErrorPage = () => {
  const error = useRouteError();
  console.error('Hello  there.', error);

  return (
    <div>
      <h1>4 A o O 4 a</h1>
      <Link href="/" label="На главную" />
    </div>
  );
};

export default ErrorPage;
