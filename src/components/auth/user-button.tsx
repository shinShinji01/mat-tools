import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/colors';

interface UserButtonProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const userBtnSide = '4.8rem';

const userBtnStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${userBtnSide};
  height: ${userBtnSide};
  border: 0.2rem solid ${colors.grape};
  border-radius: 50%;
  color: ${colors.grape};
  text-decoration: none;
`;

const UserButton = (props: UserButtonProps) => {
  const { onMouseEnter, onMouseLeave } = props;

  return (
    <Link
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      css={userBtnStyles}
      to="user"
    >
      <div>HM</div>
    </Link>
  );
};

export default UserButton;
