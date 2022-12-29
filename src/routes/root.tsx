import { Outlet } from 'react-router-dom';
import { navLinks } from '../data/navigation-items';
import Navigation from '../components/UI/navigation';
import AuthProvider from '../context/auth-context';

const Root = () => {
  return (
    <AuthProvider>
      <Navigation navLinks={navLinks} />
      <Outlet />
    </AuthProvider>
  );
};

export default Root;
