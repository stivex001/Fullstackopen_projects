/* eslint-disable no-undef */
const bcrypt = require("bcrypt");
const User = require("../model/user");

exports.user = async (req, res, next) => {
  const { username, name, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(403).json({ message: "User exists" });
    } else {
      const user = new User({
        username,
        name,
        passwordHash,
      });
      const savedUser = await user.save();

      return (
        res.status(201),
        json({ message: "User created successfully!", savedUser })
      );
    }
  } catch (error) {
    next(error);
  }
};
