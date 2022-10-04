import Display from "components/Display/Display";
import Button from "components/Button/Button";
import useLocalStorage from "Hooks/useLocalStorage";

const App = () => {
  const [counter, setCounter] = useLocalStorage("jhgfjgh", -9);
  const changeCount = (delta) => {
    let newCounter = counter + delta;
    setCounter(newCounter);
  };
  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} delta={1} text="minus" />
      <Button changeCount={changeCount} delta={-counter} text="zero" />
      <Button changeCount={changeCount} delta={-1} text="plus" />
    </div>
  );
};
export default App;
