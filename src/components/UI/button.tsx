import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  type?: 'submit' | 'reset';
  onClick?:
    | ((e?: React.MouseEvent<HTMLButtonElement>) => Promise<void>)
    | ((e?: React.MouseEvent<HTMLButtonElement>) => void)
    | ((data?: any) => void);
}

const Button = (props: ButtonProps) => {
  const { children, label, ...rest } = props;
  return <button {...rest}>{children || label}</button>;
};

export default Button;
