import Label from './label';

interface CheckBoxProps {
  onChange: () => void;
  value: boolean;
}

interface LabeledCheckBoxProps extends CheckBoxProps {
  label: string;
}

export const CheckBox = (props: CheckBoxProps) => {
  const { value, ...rest } = props;
  return <input type="checkbox" {...rest}></input>;
};

export const LabeledCheckbox = (props: LabeledCheckBoxProps) => {
  const { label, value, ...rest } = props;

  return (
    <Label label={label}>
      <CheckBox {...rest} value={value} />
    </Label>
  );
};
