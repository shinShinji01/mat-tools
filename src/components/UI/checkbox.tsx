import { css, SerializedStyles } from '@emotion/react';
import { borderRadius, flexCenter, space } from '../../styles/variables';
import { hexToRgb } from '../../utils/utils';
import { colors } from '../../styles/colors';
import Label from './label';

interface CheckBoxProps {
  onChange: () => void;
  value: boolean;
  css?: SerializedStyles;
}

interface LabeledCheckBoxProps extends CheckBoxProps {
  label: string;
}

const checkboxConainer = css`
  ${flexCenter};
`;

const pseudoCheckboxStyles = css`
  content: '';
  visibility: visible;
  position: absolute;
  top: -50%;
  left: 0;
  padding-left: 2.4rem;
  height: 2.4rem;
  border-radius: ${borderRadius.circle};
`;

const fancyCheckBoxStyles = css`
  position: relative;
  visibility: hidden;
  cursor: pointer;
  margin-right: ${space.md};

  :checked::after {
    ${pseudoCheckboxStyles}
    background: radial-gradient(
      closest-corner,
      ${colors.green},
      transparent 60%
    );
  }

  ::before {
    ${pseudoCheckboxStyles}
    background: rgba(${hexToRgb(colors.grayBackground)}, 0.6);
  }
`;

export const CheckBox = (props: CheckBoxProps) => {
  const { value, css, ...rest } = props;
  return <input css={css} type="checkbox" checked={value} {...rest}></input>;
};

export const LabeledCheckbox = (props: LabeledCheckBoxProps) => {
  const { label, value, ...rest } = props;

  return (
    <Label label={label}>
      <CheckBox {...rest} value={value} />
    </Label>
  );
};

export const LabeledCheckboxFancy = (props: LabeledCheckBoxProps) => {
  const { label, value, ...rest } = props;

  return (
    <div css={checkboxConainer}>
      <Label label={label}>
        <CheckBox css={fancyCheckBoxStyles} {...rest} value={value} />
      </Label>
    </div>
  );
};
