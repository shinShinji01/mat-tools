import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { navLinks } from '../data/navigation-items';
import Navigation from '../components/UI/navigation';
import Auth from '../components/auth/auth';
import AuthProvider from '../context/auth-context';

const navContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;

const Root = () => {
  return (
    <AuthProvider>
      <div css={navContainerStyles} className="navigation-container">
        <Navigation navLinks={navLinks} />
        <Auth />
      </div>
      <div className="calculator-container">
        <Outlet />
      </div>
    </AuthProvider>
  );
};

export default Root;
