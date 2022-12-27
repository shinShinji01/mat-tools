import { css } from '@emotion/react';
import { colors } from '../../styles/colors';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
  label: string;
}

const link = css({
  color: `${colors.grape}`,
  textDecoration: 'none',

  '&:hover': {
    borderBottom: `0.1rem solid ${colors.grape}`,
  },
});

const Link = (props: LinkProps) => {
  const { href, label } = props;
  return (
    <RouterLink css={link} to={href}>
      {label}
    </RouterLink>
  );
};

export default Link;
