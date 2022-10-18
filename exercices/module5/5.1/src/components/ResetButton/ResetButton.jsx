import { Context as countersContext } from "contexts/countersContext";
import React, { useContext } from "react";

const ResetButton = () => {
  const { resetAll } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    resetAll();
  };

  return <button onClick={handleClick}>Reset all</button>;
};
export default ResetButton;
