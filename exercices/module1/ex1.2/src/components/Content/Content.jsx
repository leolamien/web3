import Part from "components/Part/Part";

const Content = (probs) => {
    return (
      <div>
        <Part part={probs.part1} exercises={probs.exercises1} />
        <Part part={probs.part2} exercises={probs.exercises2} />
        <Part part={probs.part3} exercises={probs.exercises3} />
      </div>
    );
  };

  export default Content;