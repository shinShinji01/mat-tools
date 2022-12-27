interface HeaderProps {
  label: string;
}

export const PrimaryHeader = ({ label }: HeaderProps) => {
  return <h1>{label}</h1>;
};

export const SecondaryHeader = ({ label }: HeaderProps) => {
  return <h2>{label}</h2>;
};
