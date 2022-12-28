interface SignButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SignButtons = (props: SignButtonProps) => {
  const { onClick } = props;

  return (
    <div>
      <button onClick={onClick} data-id="sign-in">
        Sign in
      </button>
      <button onClick={onClick} data-id="sign-up">
        Sign up
      </button>
    </div>
  );
};

export default SignButtons;
