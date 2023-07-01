import express from "express"
import { addPeople, deletePerson, getPeople, getPerson } from "../controller/people.js"

const router = express.Router()

router.get('/', getPeople)

router.post("/addPerson", addPeople)

router.get("/:id", getPerson)

router.delete("/:id", deletePerson)

export default router;