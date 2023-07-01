import express from "express"
import { addPeople, getPeople } from "../controller/people.js"

const router = express.Router()

router.get('/', getPeople)

router.post("/addPerson", addPeople)

export default router;