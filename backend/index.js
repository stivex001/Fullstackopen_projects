const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());

let people = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(people);
});

app.get("/api/persons/info", (req, res) => {
  const info = people.length;
  const response = `
      <p>Phonebook has info for ${info} people</p>
      <br />
      <span>${Date.now()}</span>
    `;
  res.send(response);
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  const person = people.find((person) => person.id === id);

  if (person) {
    res.json({ message: "success", person });
  } else {
    res.status(404).json({ message: "oops person not found" });
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);

  res.status(204).json({ message: "note deleted successfully" });
});

// PORT
const PORT = process.env.PORT || 5000;

// LISTEN TO REQUEST ON PORT 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
