import { Outlet } from 'react-router-dom';
import Link from '../components/UI/link';

const Calculator = () => {
  // if calc type is not selected
  // present a selection menu
  // ====
  // header
  // description
  // inputs
  // output
  // ====
  // return to index
  return (
    <main>
      <Outlet />
      <Link href="/" label="На главную" />
    </main>
  );
};

export default Calculator;
