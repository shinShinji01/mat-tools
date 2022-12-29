import React, { useContext, useState } from 'react';
import { css } from '@emotion/react';
import UserButton from './user-button';
import SignButtons from './sign-buttons';
import SignIn from './signin';
import SignUp from './signup';
import { userBtnSide } from './user-button';
import { signOutUser } from '../../utils/firebase';
import { authContext } from '../../context/auth-context';

interface AuthFormProps {
  onMouseLeave: () => void;
}

const AuthForm = (props: AuthFormProps) => {
  const { onMouseLeave } = props;

  const authCtx = useContext(authContext);
  const { loginState } = authCtx;
  const [actionType, setActionType] = useState<string | null>(null);

  const actionHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    if (typeof id !== 'string') return;
    setActionType(id);
  };

  const authFormStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    position: absolute;
    right: 0;
    top: ${userBtnSide};
    width: 25rem;
    height: 35rem;
    background-color: wheat;
  `;

  return (
    <div onMouseLeave={onMouseLeave} css={authFormStyles}>
      <div>
        <UserButton />
      </div>
      {!loginState && <SignButtons onClick={actionHandler} />}
      {actionType === 'sign-in' && <SignIn />}
      {actionType === 'sign-up' && <SignUp />}
      {loginState && <button onClick={signOutUser}>Sign Out</button>}
    </div>
  );
};

export default AuthForm;
