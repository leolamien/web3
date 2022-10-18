import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [good, setGood] = useState(1);
  const [ok, setOk] = useState(1);
  const [bad, setBad] = useState(1);

  const resetAll = () => {
    setBad(0);
    setGood(0);
    setOk(0);
  };

  const increaseGood = () => {
    setGood(good+1);
  };
  const increaseOk = () => {
    setOk(ok+1);
  };
  const increaseBad = () => {
    setBad(bad+1);
  };

  const exposedValue = {
    good,
    bad,
    ok,
    increaseBad,
    increaseGood,
    increaseOk,
    resetAll,
  };

  // const [language, setLanguage] = useState("fr")
  // const pickLanguage = (newLanguage) => {
  //     if (newLanguage !== "fr" && newLanguage !== "en")   throw "Invalid language selected : "+newLanguage;
  //     setLanguage(newLanguage)
  // }

  // const exposedValue = {
  //     language,
  //     pickLanguage,
  // }

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
