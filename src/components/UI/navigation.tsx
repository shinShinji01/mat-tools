import { css } from '@emotion/react';
import { LinkData } from '../../data/navigation-items';
import Link from './link';
import Auth from '../auth/auth';
import { height, space } from '../../styles/variables';

interface NavigationProps {
  navLinks: LinkData[];
}

const navContainerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${height.navigation};
  width: 70%;
  background-color: lightblue;
`;

const navListStyles = css`
  display: flex;
  gap: ${space.sm};
  padding: ${space.md};
  list-style: none;
`;

const Navigation = (props: NavigationProps) => {
  const { navLinks } = props;

  return (
    <nav css={navContainerStyles} className="navigation-container">
      <ul css={navListStyles}>
        {navLinks.map(({ label, src }, index) => (
          <li key={index}>
            <Link href={src} label={label} />
          </li>
        ))}
      </ul>
      <Auth />
    </nav>
  );
};

export default Navigation;
