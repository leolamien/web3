import { Context as countersContext } from "contexts/countersContext";
import React, { useContext } from "react";
import BadButton from "components/BadButton/BadButton";
import GoodButton from "components/GoodButton/GoodButton";
import ResetButton from "components/ResetButton/ResetButton";
import OkButton from "components/OkButton/OkButton";

const App = () => {
  const { good, bad, ok } = useContext(countersContext);

  return (
    <div>
      <div>
        <ul>
          <li>
            Good : {good} <GoodButton />
          </li>
          <li>
            Ok : {ok} <OkButton />
          </li>
          <li>
            Bad : {bad} <BadButton />
          </li>
        </ul>
        <ResetButton />
      </div>
    </div>
  );
};
export default App;
