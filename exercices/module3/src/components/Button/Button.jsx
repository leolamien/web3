const Button = ({ changeCount, text, delta }) => {
  // const handleClick = (e) => {
  //   changeCount();
  // };
  // return (
  //   <button  onClick={handleClick}>
  //     {text}
  //   </button>
  // );
  const handleClick = (e) => {
    let delta = e.target.dataset.delta;
    delta = parseInt(delta);
    changeCount(delta+1);
  };
  return (
    <button data-delta={delta} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
