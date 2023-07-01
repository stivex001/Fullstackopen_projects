import express from "express"
import { getPeople } from "../controller/people.js"

const router = express.Router()

router.get('/', getPeople)

export default router;