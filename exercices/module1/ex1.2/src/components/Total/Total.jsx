const Total = (probs) => {
    return (
      <p>
        Number of exercises{" "}
        {probs.exercises1 + probs.exercises2 + probs.exercises3}
      </p>
    );
  };

  export default Total;