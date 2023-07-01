import People from "../model/people.js";

export const getPeople = async (req, res) => {
  try {
    const people = await People.find();

    res.status(200).json({ message: "Success", people });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addPeople = async (req, res) => {
  try {
    const { name, number } = req.body;

    // check if the person is already in the databse
    const existingPerson = await People.findOne({ name });

    if (existingPerson) {
      return res.status(409).json({
        error: "Person already exists",
      });
    }

    // creating a new person data
    const newPerson = await new People({ name, number }).save();

    res.status(201).json({ message: "Person created Successfully", newPerson });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Geeting a single person
export const getPerson = async (req, res) => {
  try {
    const id = req.params.id;

    const person = await People.findById(id);

    if (person) {
      res.status(200).json({ message: "success", person });
    } else {
      res.status(404).json({ message: "person not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Deleting a person
export const deletePerson = async (req, res, next) => {
  const id = req.params.id;
  try {
    const person = await People.findByIdAndRemove(id);

    if (person) {
      res.status(204).json({ message: "person deleted successfully" });
    } else {
      res.status(404).json({ message: "person not found" });
    }
  } catch (error) {
    next(error);
  }
};
