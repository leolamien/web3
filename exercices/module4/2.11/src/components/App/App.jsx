import { useState, useEffect } from "react";
import Person from "components/Person/Person";
import Button from "components/Button/Button";
import Header from "components/Header/Header";
import Input from "components/Input/Input";
import Services from "components/Services/Services";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    Services.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const SetVName = (name) => {
    setNewName(name);
  };
  const setVNumber = (number) => {
    setNewNumber(number);
  };
  const addName = (event) => {
    event.preventDefault();
    let isPresent;
    const foundIndex = persons.findIndex((item) => item.name === newName);
    if(foundIndex===-1){
      //remove foreach
    }
    persons.forEach((pers) => {
      if (pers.name === newName) {
        isPresent = "true";
        pers.number = newNumber;
        updateFunction(pers, foundIndex);
      }
    });
    if (!isPresent) {
      const person = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      Services.create(person).then((response) => {
        setPersons(persons.concat(response));
        SetVName("");
        setVNumber("");
      });
    }
  };

  function updateFunction(pers, index) {
    let text = `${newName} is alredy added to your phonebook, replacde the older number with a new one ?`;
    if (window.confirm(text) === true) {
      Services.update(pers.id, pers).then((response) => {
        let newA = persons;
        newA[index].number = newNumber;
        persons[index].number = newNumber;
        //use index
        setPersons(persons.flat(newNumber, index, index + 1));
      });
    }
  }

  const deletePersonn = (id) => {
    const personToDelete = persons.find((pers) => pers.id === id);
    let text = `Delete ${personToDelete.name} ?`;
    if (window.confirm(text) === true) {
      Services.delete(id, personToDelete).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const handleNoteChange = (event) => {
    SetVName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setVNumber(event.target.value);
  };

  return (
    <div>
      <Header title="Phonebook" />
      <form onSubmit={addName}>
        <Input value={newName} handleForm={handleNoteChange} text="Name" />
        <Input
          value={newNumber}
          handleForm={handleNumberChange}
          text="Number"
        />
        <Button type="submit" text="add" deleteName="null" />
      </form>
      <Header title="Numbers" />
      {persons.map((person) => (
        <ul key={person.id}>
          <Person {...{ person }} />
          <Button
            type="submit"
            text="delete"
            deleteName={deletePersonn}
            id={person.id}
          />
        </ul>
      ))}
    </div>
  );
};

export default App;
