import { createContext, useEffect, useState } from 'react';
import { onUserStateChanged } from '../utils/firebase';

const defaultValue = { loginState: false, updateState: (data: boolean) => {} };
export const authContext = createContext(defaultValue);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [loginState, setLoginState] = useState(false);

  useEffect(() => onUserStateChanged(updateState), []);

  const updateState = (data: boolean) => setLoginState(data);

  const value = { loginState: loginState, updateState };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
