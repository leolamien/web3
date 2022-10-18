import { Context as countersContext } from "contexts/countersContext";
import React, { useContext } from "react";

const OkButton = () => {
  const { increaseOk } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    increaseOk();
  };

  return <button onClick={handleClick}>Increase ok</button>;
};
export default OkButton;

