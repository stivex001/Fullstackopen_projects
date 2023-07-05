import express from "express"
import { getBlog } from "../controller/blogs"

const router = express.Router()

router.get('/', getBlog)

export default router