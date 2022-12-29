import { css } from '@emotion/react';
import { LinkData } from '../../data/navigation-items';
import Link from './link';

interface NavigationProps {
  navLinks: LinkData[];
}

const navStyles = css`
  width: 100%;
  background-color: lightblue;
`;

const navListStyles = css`
  display: flex;
  gap: 1.2rem;
  list-style: none;
`;

const Navigation = (props: NavigationProps) => {
  const { navLinks } = props;

  return (
    <nav css={navStyles}>
      <ul css={navListStyles}>
        {navLinks.map(({ label, src }, index) => (
          <li key={index}>
            <Link href={src} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
