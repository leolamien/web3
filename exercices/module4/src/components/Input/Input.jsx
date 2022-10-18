const Input = ({ value, onchange, text }) => {
  return (
    <div>
      <label>{text}</label>
      <input value={value} onChange={onchange} />
      {/* number: <input value={newNumber} onChange={handleNumberChange} /> */}
    </div>
  );
};
export default Input;
