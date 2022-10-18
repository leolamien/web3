import { Context as countersContext } from "contexts/countersContext";
import React, { useContext } from "react";

const GoodButton = () => {
  const { increaseGood } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    increaseGood();
  };

  return <button onClick={handleClick}>Increase good</button>;
};
export default GoodButton;
