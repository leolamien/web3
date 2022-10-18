const Button = ({ changeCount, text, delta }) => {
  

  return (
    <div>
      <button onClick={changeCount}>{text}</button>
    </div>
  );
};
export default Button;
