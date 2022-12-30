import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { colors } from '../../styles/colors';
import { flexCenter } from '../../styles/variables';
import React from 'react';

interface NavigationItemProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  href: string;
  label: string;
  active?: boolean;
}

const navigationItemStyles = css`
  ${flexCenter}
  height: 100%;
  color: ${colors.orangeTextLight};
  text-decoration: none;

  &:hover {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0),
      95%,
      ${colors.orangeTextLight} 5%
    );
  }
`;

const activeItem = css`
  ${navigationItemStyles}
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0),
    95%,
    ${colors.orangeTextLight} 5%
  );
`;

const NavigationItem = (props: NavigationItemProps) => {
  const { onClick, href, label, active, ...rest } = props;

  return (
    <Link
      onClick={onClick}
      to={href}
      css={{ ...navigationItemStyles, ...(active && activeItem) }}
      {...rest}
    >
      {label}
    </Link>
  );
};

export default NavigationItem;
