const Input = ({ value, handleForm, text }) => {
  const handleClick = (e) => {
    handleForm(e);
  };
  return (
    <div>
      <label>{text}</label>
      <input value={value} onChange={handleForm}></input>
    </div>
  );
};
export default Input;
