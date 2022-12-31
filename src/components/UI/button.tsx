import { css } from '@emotion/react';
import { borderRadius, flexCenter, space } from '../../styles/variables';
import { colors } from '../../styles/colors';

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  type?: 'submit' | 'reset';
  disabled?: boolean;
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

const disabledButtonStyles = css`
  ${buttonStyles};
  background: linear-gradient(110deg, ${colors.grayDark}, ${colors.gray});
  color: ${colors.grayLight};

  &:hover {
    cursor: not-allowed;
  }
`;

const submitButtonStyles = css`
  ${buttonStyles};
  background: linear-gradient(135deg, ${colors.greenDark}, ${colors.green});
  box-shadow: 0 0 0.8rem 0.3rem ${colors.greenDark};

  &:hover {
  }
`;

const resetButtonStyles = css`
  ${buttonStyles};
  background: linear-gradient(135deg, ${colors.redDark}, ${colors.red});
  box-shadow: 0 0 0.5rem 0.1rem ${colors.redDark};
`;

const Button = (props: ButtonProps) => {
  const { children, label, ...rest } = props;
  return (
    <button
      css={{
        ...buttonStyles,
        ...(props.disabled && disabledButtonStyles),
        ...(props.type === 'submit' && submitButtonStyles),
        ...(props.type === 'reset' && resetButtonStyles),
      }}
      {...rest}
    >
      {label && label}
      {children && children}
    </button>
  );
};

export default Button;
