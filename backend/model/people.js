/* eslint-disable no-undef */
const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

const People = mongoose.model('People', peopleSchema)
module.exports = People;
