const Button = ({ type, text, deleteName, id }) => {
  const handleClick = () => {
    deleteName(id);
  };
  if (deleteName === "null") {
    return (
      <div>
        <button id={id} type={type}>
          {text}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button id={id} type={type} onClick={handleClick}>
          {text}
        </button>
      </div>
    );
  }
};

export default Button;
