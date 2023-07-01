import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB successfully");
    })
    .catch((err) => {
      throw err;
    });
};

// Middleware
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  dbConnect()
  console.log(`server successfully running on ${port}`);
})
