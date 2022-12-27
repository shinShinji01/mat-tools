interface SelectProps {
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const Select = (props: SelectProps) => {
  const { children, ...rest } = props;

  return <select {...rest}>{children}</select>;
};

export default Select;
