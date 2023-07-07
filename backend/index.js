/* eslint-disable no-undef */
const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const peopleRoute = require("./routes/peopleRoute");
const blogRoute = require("./routes/blogRoute");
const userRoute = require("./routes/userRoute");
const { errorHandler } = require("./utils/error");
const logger = require("./utils/logger");

const app = express();
dotenv.config();

const MONGODB =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGO_URL
    : process.env.MONGO_URL;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB);
    console.log("Connected to DB successfully");
  } catch (err) {
    console.error("Failed to connect to DB:", err);
    process.exit(1); // Exit the process or handle the error appropriately
  }
};

// Middleware
app.use(express.json());
app.use(cors());

// Error handling middleware
app.use(errorHandler);

// Routes
app.use("/api/v1/people", peopleRoute);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/users", userRoute);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await dbConnect();
    logger.info(`Server successfully running on ${port}`);
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // Exit the process or handle the error appropriately
  }
});
