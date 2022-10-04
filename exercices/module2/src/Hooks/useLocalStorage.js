import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  let temp;
  if(JSON.parse(localStorage.getItem(key)) == null){
    temp=initialValue;
    // localStorage.setItem(key, JSON.stringify(initialValue));
  }else{
    temp=JSON.parse(localStorage.getItem(key));
  }
  const [counter, setCounter] = useState(temp);
  
  
  console.log(counter);
  const setPersiste = (action) => {
    console.log(action+ "action");
    setCounter(action);
    localStorage.setItem(key, JSON.stringify(action));
  };
  return [counter, setPersiste];
};

export default useLocalStorage;
