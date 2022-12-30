import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import Link from '../components/UI/link';
import { borderRadius, space, shadow } from '../styles/variables';
import { hexToRgb } from '../utils/utils';
import { colors } from '../styles/colors';

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

  const calculatorStyles = css`
    margin-top: ${space.ultra};
    width: 70%;
    max-width: 80rem;
    min-width: 70rem;
    padding: ${space.lg};
    background: linear-gradient(
      165deg,
      rgba(${hexToRgb(colors.orange)}, 0.8),
      rgba(${hexToRgb(colors.orangeDark)}, 0.65) 50%
    );
    border-radius: ${borderRadius.smooth};
    box-shadow: ${shadow.normal};
  `;

  return (
    <main css={calculatorStyles} className="calculator-container">
      <Outlet />
      <Link href="/" label="На главную" />
    </main>
  );
};

export default Calculator;
