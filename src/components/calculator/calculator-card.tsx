import { css } from '@emotion/react';
import { colors } from '../../styles/colors';
import { space } from '../../styles/variables';

interface CalculatorCardProps {
  children: React.ReactNode;
}

const calculatorCardStyles = css`
  padding: ${space.lg};
`;

const CalculatorCard = (props: CalculatorCardProps) => {
  const { children } = props;

  return <div css={calculatorCardStyles}>{children}</div>;
};

export default CalculatorCard;
