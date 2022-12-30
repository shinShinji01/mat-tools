import { css } from '@emotion/react';
import { dividers, flexCenter, space } from '../styles/variables';

interface HeaderProps {
  label: string;
  children?: React.ReactNode;
}

const headerStyles = css`
  display: flex;
  align-items: center;
  gap: ${space.sm};
  ${dividers.orange};
  margin-bottom: ${space.lg};
  letter-spacing: 0.12rem;
`;

export const PrimaryHeader = ({ children, label }: HeaderProps) => {
  return (
    <h1 css={headerStyles}>
      {children && children}
      {label}
    </h1>
  );
};

export const SecondaryHeader = ({ children, label }: HeaderProps) => {
  return (
    <h2 css={headerStyles}>
      {children && children}
      {label}
    </h2>
  );
};
