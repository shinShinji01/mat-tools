import { css } from '@emotion/react';
import { inputsBase } from '../../styles/variables';

interface SelectProps {
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const selectStyles = css`
  appearance: none;
  ${inputsBase};

  &:hover {
    cursor: pointer;
  }
`;

const Select = (props: SelectProps) => {
  const { children, ...rest } = props;

  return (
    <select css={selectStyles} {...rest}>
      {children}
    </select>
  );
};

export default Select;
