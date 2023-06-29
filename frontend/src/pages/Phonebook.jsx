import React, { useState } from "react";
import axios from "axios"

const peopleData = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const baseUrl = 'http://localhost:3001/api/notes'


const Phonebook = () => {
  const [persons, setPersons] = useState(peopleData);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [filter, setFilter] = useState("");

  const addName = (e) => {
    e.preventDefault();

    // Check if the name already exists in the array
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      setErrorMessage(`${newName} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
      setNewName("");
      setErrorMessage("");
      setNewNumber("");
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <br />
      <br />
      <div>
        Filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
      <br />
      <br />
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {filteredPersons.map((person) => (
          <p key={person.name}>
            {person.name}-{person.number}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Phonebook;
