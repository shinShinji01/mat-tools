import { css } from '@emotion/react';
import {
  borderRadius,
  flexCenter,
  shadow,
  space,
} from '../../styles/variables';
import { hexToRgb } from '../../utils/utils';
import { colors } from '../../styles/colors';

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  type?: 'submit' | 'reset';
  onClick?:
    | ((e?: React.MouseEvent<HTMLButtonElement>) => Promise<void>)
    | ((e?: React.MouseEvent<HTMLButtonElement>) => void)
    | ((data?: any) => void);
}

const buttonStyles = css`
  ${flexCenter};
  gap: ${space.sm};
  padding: ${space.sm} ${space.lg};
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: ${colors.orangeTextLight};
  border: none;
  border-radius: ${borderRadius.round};

  &:hover {
    cursor: pointer;
  }
`;

const submitButton = css`
  ${buttonStyles};
  background: linear-gradient(135deg, ${colors.greenDark}, ${colors.green});
  box-shadow: 0 0 0.8rem 0.2rem ${colors.greenDark};

  &:hover {
  }
`;

const Button = (props: ButtonProps) => {
  const { children, label, ...rest } = props;
  return (
    <button
      css={{ ...buttonStyles, ...(props.type === 'submit' && submitButton) }}
      {...rest}
    >
      {label && label}
      {children && children}
    </button>
  );
};

export default Button;
