import Label from './label';

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  value?: string;
}

interface InputLabeledProps extends InputProps {
  label: string;
}

export const Input = (props: InputProps) => {
  const { type, placeholder, ...rest } = props;
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder || ''}
      {...rest}
    ></input>
  );
};

export const InputLabeled = (props: InputLabeledProps) => {
  const { label, ...rest } = props;
  return (
    <Label label={label}>
      <Input {...rest} />
    </Label>
  );
};
