import { useState } from "react";
import Statistics from "components/Statistics/Statistics";
import Button from "components/Button/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const setVGood = () => {
  //   // console.log(good+" "+neutral+ " "+ bad);
  //   setGood(good + 1);
  // };
  // const setVNeutral = () => {
  //   setNeutral(neutral + 1);
  // };
  // const setVBad = () => {
  //   setBad(bad + 1);
  // };
  // let all =good+neutral+bad;

  const setVGood = (delta) => {
    // console.log(good+" "+neutral+ " "+ bad);
    setGood(delta);
  };
  const setVNeutral = (delta) => {
    setNeutral(delta);
  };
  const setVBad = (delta) => {
    setBad(delta);
  };
  // return (
  //   <div>
  //     <Button changeCount={setVGood} text={"good"} />
  //     <Button changeCount={setVNeutral} text={"neutral"} />
  //     <Button changeCount={setVBad} text={"bad"} />
  //     {<Statistics {...{ good, neutral, bad }} />}
  //   </div>
  // );
  return (
    <div>
      <Button changeCount={setVGood} delta={good} text={"good"} />
      <Button changeCount={setVNeutral} delta={neutral} text={"neutral"} />
      <Button changeCount={setVBad} delta={bad} text={"bad"} />
      <Statistics {...{ good, neutral, bad }} />
    </div>
  );
};

export default App;
