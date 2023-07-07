/* eslint-disable no-undef */
const express = require("express");
const {
  addPeople,
  deletePerson,
  getPeople,
  getPerson,
  updatePerson,
} = require("../controller/people");

const router = express.Router();

router.get("/", getPeople);

router.post("/addPerson", addPeople);

router.get("/:id", getPerson);

router.delete("/:id", deletePerson);

router.put("/:id", updatePerson);

module.exports = router;
