interface ParagraphProps {
  children: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { children, ...rest } = props;

  return <p {...rest}>{children}</p>;
};

export default Paragraph;
