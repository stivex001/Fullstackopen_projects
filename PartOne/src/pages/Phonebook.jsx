import React, { useState } from "react";

const Phonebook = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addName = (e) => {
    e.preventDefault();

    // Check if the name already exists in the array
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      setErrorMessage(`${newName} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName };
      setPersons([...persons, newPerson]);
      setNewName("");
      setErrorMessage("");
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Phonebook;
