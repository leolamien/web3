import Display from "components/Display/Display";

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = good - bad;

  const Percent = (all, good) => {
    let pourcent = (100 / all) * good;
    return pourcent;
  };

  const Average = (all, average) => {
    let moyenne = average / all;
    return moyenne;
  };
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <Display value={good} text="Good" />
        <Display value={neutral} text="Neutral" />
        <Display value={bad} text="Bad" />
        <Display value={all} text="All" />
        <Display value={parseInt(Average(all, average))} text="Average" />
        <Display value={parseInt(Percent(all, good)) + "%"} text="Percent" />
      </tbody>
    </table>
  );
};

export default Statistics;
