function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      <Button text="Request Swap" />
    </button>
  );
}

export default Button;