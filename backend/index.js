/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


import peopleRoute from "./routes/peopleRoute";
import blogRoute from "./routes/blogRoute";
import { errorHandler } from "./utils/error";
import logger from "./utils/logger";

const app = express();
dotenv.config();

const MONGODB =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGO_URL
    : process.env.MONGO_URL;

const dbConnect = () => {
  mongoose
    .connect(MONGODB)
    .then(() => {
      console.log("Connected to DB successfully");
    })
    .catch((err) => {
      throw err;
    });
};

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/people", peopleRoute);
app.use("/api/v1/blog", blogRoute);

app.use(errorHandler);

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  dbConnect();
  logger.info(`server successfully running on ${port}`);
});
