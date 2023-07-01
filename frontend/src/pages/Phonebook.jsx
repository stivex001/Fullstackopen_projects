import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/people";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseUrl);
        setPersons(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [persons]);

  console.log(persons.people);

  const fecthedPeole = persons?.people;

  const addName = (e) => {
    e.preventDefault();

    // Check if the name already exists in the array
    const nameExists = fecthedPeole.some((person) => person.name === newName);

    if (nameExists) {
      setErrorMessage(`${newName} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...fecthedPeole, newPerson]);
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

  const filteredPersons = fecthedPeole?.filter((person) =>
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
        {filteredPersons?.map((person) => (
          <p key={person.name}>
            {person.name}-{person.number}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Phonebook;
