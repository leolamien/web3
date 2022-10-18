const Person = ({ persons }) => {
  console.log(persons,"debug")
  return ( <ul>
    {persons.map((person) => (
      <li key={person.id}>
        {person.name},{person.number}
      </li>
    ))}
  </ul>)
};
export default Person;
