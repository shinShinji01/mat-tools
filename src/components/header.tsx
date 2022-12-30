import { css } from '@emotion/react';
import { space } from '../styles/variables';
import { colors } from '../styles/colors';

interface HeaderProps {
  label: string;
}

const headerStyles = css`
  padding-bottom: ${space.md};
  letter-spacing: 0.12rem;
  border-bottom: 0.1rem solid ${colors.dividerOrangeLight};
`;

export const PrimaryHeader = ({ label }: HeaderProps) => {
  return <h1 css={headerStyles}>{label}</h1>;
};

export const SecondaryHeader = ({ label }: HeaderProps) => {
  return <h2 css={headerStyles}>{label}</h2>;
};
