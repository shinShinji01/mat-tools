import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/colors';
import { borderRadius, flexCenter, height } from '../../styles/variables';

interface UserButtonProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const userBtnStyles = css`
  ${flexCenter};
  height: ${height.navigation};
  aspect-ratio: 1 / 1;
  border: 0.2rem solid ${colors.grape};
  border-radius: ${borderRadius.circle};
  color: ${colors.grape};
  text-decoration: none;
`;

const UserButton = (props: UserButtonProps) => {
  const { onMouseEnter, onMouseLeave } = props;

  return (
    <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to="user">
      <div css={userBtnStyles}>HM</div>
    </Link>
  );
};

export default UserButton;
