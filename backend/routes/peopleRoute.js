import express from "express";
import {
  addPeople,
  deletePerson,
  getPeople,
  getPerson,
  updatePerson,
} from "../controller/people";

const router = express.Router();

router.get("/", getPeople);

router.post("/addPerson", addPeople);

router.get("/:id", getPerson);

router.delete("/:id", deletePerson);

router.put("/:id", updatePerson);

export default router;
