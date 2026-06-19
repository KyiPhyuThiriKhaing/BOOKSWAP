type ButtonProps = {
  text: string;
  onClick?: () => void;
};

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
