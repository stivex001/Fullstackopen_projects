import People from "../model/people.js";

export const getPeople = (req, res) => {
  res.status(200).json("sucess");
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

    res.status(201).json({message: "Person created Successfully"})

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
