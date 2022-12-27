import { css } from '@emotion/react';
import { LinkData } from '../../data/navigation-items';
import Link from './link';

interface NavigationProps {
  navLinks: LinkData[];
}

const navList = css({
  display: 'flex',
  gap: '1.2rem',
  listStyle: 'none',
});

const Navigation = (props: NavigationProps) => {
  const { navLinks } = props;

  return (
    <nav>
      <ul css={navList}>
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
