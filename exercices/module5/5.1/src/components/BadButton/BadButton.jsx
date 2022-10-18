import { Context as countersContext } from "contexts/countersContext";
import React, { useContext } from "react";

const BadButton = () => {
  const { increaseBad } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    increaseBad();
  };

  return <button onClick={handleClick}>Increase bad</button>;
};
export default BadButton;
