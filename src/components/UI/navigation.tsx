import { css } from '@emotion/react';
import { LinkData } from '../../data/navigation-items';
import Auth from '../auth/auth';
import { flexCenter, height, space } from '../../styles/variables';
import { colors } from '../../styles/colors';
import NavigationItem from './navigation-item';
import React, { useState } from 'react';

interface NavigationProps {
  navLinks: LinkData[];
}

const navContainerStyles = css`
  ${flexCenter};
  width: 100%;
  border-bottom: 0.2rem solid ${colors.orangeTextLight};
`;

const navInnerContainerStyles = css`
  ${flexCenter};
  justify-content: space-between;
  height: ${height.navigation};
  width: 60%;
`;

const navListStyles = css`
  display: flex;
  gap: ${space.lg};
  height: 100%;
  list-style: none;
`;

const Navigation = (props: NavigationProps) => {
  const { navLinks } = props;
  const [curActive, setCurActive] = useState<string | null>(null);

  const navSelectHandler = (e: React.MouseEvent) => {
    const target = e.target;
    if (target) {
      const active = (target as HTMLAnchorElement).dataset.id;
      typeof active === 'string' && setCurActive(active);
    }
  };

  return (
    <nav css={navContainerStyles} className="navigation-container">
      <div css={navInnerContainerStyles}>
        <ul css={navListStyles}>
          {navLinks.map(({ label, src, id }, index) => (
            <NavigationItem
              onClick={navSelectHandler}
              key={index}
              href={src}
              label={label}
              data-id={id}
              active={curActive === id}
            />
          ))}
        </ul>
        <Auth />
      </div>
    </nav>
  );
};

export default Navigation;
