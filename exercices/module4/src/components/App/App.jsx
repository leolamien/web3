import { useState } from "react";
import Filter from "components/Filter/Filter";
import Person from "components/Person/Person";
import PersonForm from "components/PersonForm/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 223,id: 0, },
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [personsCopy, setPersonscopy] = useState(persons)

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [newFilterValue, setNewFilterValue] = useState("");

  const SetVName = (name) => {
    setNewName(name);
  };
  const setVNumber = (number) => {
    setNewNumber(number);
  };
  const addName = (event) => {
    event.preventDefault();
    let isPresent;
    persons.forEach((name) => {
      if (name.name === newName) {
        alert(`${newName} is already added to phonebook`);
        isPresent = "true";
      }
    });
    if (!isPresent) {
      const newArray = persons.concat({
        name: newName,
        id: persons.length + 1,
        number: newNumber,
      });
      setPersons(newArray);
    }
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    SetVName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setVNumber(event.target.value);
  };

  const handlefilter = (event) => {
    setNewFilterValue(event.target.value);
    const newArray = persons.filter((person) =>
      person.name.startsWith(event.target.value)
    );
    setPersonscopy(newArray);
 
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilterValue} filter={handlefilter} />
      <PersonForm
        onsubmit={addName}
        onchange1={handleNoteChange}
        onchange2={handleNumberChange}
        value1={newName}
        value2={newNumber}
      ></PersonForm>
      <h2>Numbers</h2>
      <Person persons={personsCopy} />
    </div>
  );
};

export default App;
