const Button = ({ changeCount, text, delta }) => {
  const handleClick = (e) => {
    changeCount(delta + 1);
  };
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
