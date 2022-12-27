interface LabelProps {
  label: string;
  children: React.ReactNode;
}

const Label = (props: LabelProps) => {
  const { label, children } = props;

  return (
    <label>
      {children}
      {label}
    </label>
  );
};

export default Label;
