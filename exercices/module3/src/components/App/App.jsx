import { useState } from "react";
import Statistics from "components/Statistics/Statistics";
import Button from "components/Button/Button";
import Loading from "components/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setVGood = (delta) => {
    setGood(delta);
  };
  const setVNeutral = (delta) => {
    setNeutral(delta);
  };
  const setVBad = (delta) => {
    setBad(delta);
  };
  setTimeout(() => {
    console.log("timeout !");
    setLoading(false);
  }, 3000);
  if (loading) {
    return <Loading />;
  }

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
