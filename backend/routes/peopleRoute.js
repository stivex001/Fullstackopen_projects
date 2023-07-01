import express from "express"
import { addPeople, getPeople, getPerson } from "../controller/people.js"

const router = express.Router()

router.get('/', getPeople)

router.post("/addPerson", addPeople)

router.get("/:id", getPerson)

export default router;