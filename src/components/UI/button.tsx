import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset';
  onClick?:
    | ((e?: React.MouseEvent<HTMLButtonElement>) => Promise<void>)
    | ((e?: React.MouseEvent<HTMLButtonElement>) => void);
}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
