import { useState } from 'react';
import { css } from '@emotion/react';
import UserButton from './user-button';
import AuthForm from './auth-form';

const Auth = () => {
  const [showUser, setShowUser] = useState(false);
  const mouseEnterHandler = () => setShowUser((prevState) => !prevState);

  const test = css`
    position: relative;
  `;

  return (
    <div css={test}>
      <UserButton
        onMouseEnter={mouseEnterHandler}
        // onMouseLeave={mouseEnterHandler}
      />
      {showUser && <AuthForm onMouseLeave={mouseEnterHandler} />}
    </div>
  );
};

export default Auth;
