const Button = ({ changeCount, text, delta }) => {
  const handleClick = (e) => {
    let delta = e.target.dataset.delta;
    delta = parseInt(delta);
    changeCount(delta);
  };
  return (
    <button data-delta={delta} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
