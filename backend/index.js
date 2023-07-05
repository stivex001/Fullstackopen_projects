/* eslint-disable no-undef */
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import peopleRoute from "./routes/peopleRoute.js"
import blogRoute from "./routes/blogRoute.js"
import { errorHandler } from "./utils/error.js"
import logger from "./utils/logger.js"

const app = express()
dotenv.config()

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB successfully")
    })
    .catch((err) => {
      throw err
    })
}

// Middleware
app.use(cors())
app.use(express.json())

// ROUTES
app.use("/api/v1/people", peopleRoute)
app.use("/api/v1/blog", blogRoute)

app.use(errorHandler)

const port = process.env.PORT || 8080

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  dbConnect()
  logger.info(`server successfully running on ${port}`)
})
