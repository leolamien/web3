import Display from "components/Display/Display";

const Statistics = ({ good, neutral, bad }) => {

  let all = good + neutral + bad;
  let average = good - bad;

  const Percent = (all, good) => {
    let pourcent = (100 / all) * good;
    nan(pourcent);
    // return <p> percent = {pourcent} %</p>;
    return pourcent;
  };

  const Average = (all, average) => {
    let moyenne = average / all;
    nan(moyenne);
    // return <p> average = {moyenne}</p>;
    return moyenne;
  };
  if( !nan(good) && !nan(neutral) && !nan(bad)){
    return(
      <p>Not feedback given</p>
    );
  }else{
  return (
    <div>
      <Display value={good} text="Good" />
      <Display value={neutral} text="Neutral" />
      <Display value={bad} text="Bad" />
      <Display value={all} text="All" />
      <Display value={parseInt(Average(all, average))} text="Average" />
      <Display value={parseInt(Percent(all, good))+"%"} text="Percent" />
    </div>
  );
  }
};

const nan = (number) => {
  if (isNaN(number)) {
    number = 0;
  }
  return number;
};
export default Statistics;
