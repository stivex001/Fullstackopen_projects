import mongoose from 'mongoose'

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
  },
  { timestamps: true }
)

const People = mongoose.model('People', peopleSchema)
export default People
