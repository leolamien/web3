import Display from "components/Display/Display";
import Button from "components/Button/Button";
import { useState } from "react";

// const App = () => {
//     const [ counter, setCounter ] = useState(0)

//     // const increaseByOne = () => setCounter(counter + 1)
//     // const decreaseByOne = () => setCounter(counter - 1)
//     // const setToZero = () => setCounter(0)

//     function changeCount(delta) {
//         setCounter(counter + delta)
//     }
//     return (
//       <div>
//         <Display counter={counter}/>
//         <Button
//           onClick={changeCount(+1)}
//           text='plus'
//         />
//         <Button
//           onClick={changeCount(-counter)}
//           text='zero'
//         />
//         <Button
//           onClick={changeCount(-1)}
//           text='minus'
//         />
//       </div>
//     )
//   }

const App = () => {
  const [counter, setCounter] = useState(0);

  const changeCount = (delta) => {
    console.log(delta);
    setCounter(counter + delta);
  };
  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} delta={1} text="plus" />
      <Button changeCount={changeCount} delta={-counter} text="zero" />
      <Button changeCount={changeCount} delta={-1} text="plus" />
    </div>
  );
};
export default App;
