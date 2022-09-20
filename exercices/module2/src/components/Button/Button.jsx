// const Button = (text, changeCount) => {
//   const handleClick = (e) => {
//     let delta = e.target.dataset.delta;
//   };

//   return (
//     <div>
//       <button onClick={changeCount}>{text}</button>
//     </div>
//   );
// };

// const Button = (props) => {

//   return <button onClick={props.onClick}>{props.text}</button>;
// };
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
