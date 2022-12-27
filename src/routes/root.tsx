import { Outlet } from 'react-router-dom';
import { navLinks } from '../data/navigation-items';
import Navigation from '../components/UI/navigation';

const Root = () => {
  return (
    <>
      <Navigation navLinks={navLinks} />
      <div className="calculator-container">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
