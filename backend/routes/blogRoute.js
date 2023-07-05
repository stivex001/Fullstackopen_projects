import express from "express";
import { addBlog, getBlog } from "../controller/blogs.js";

const router = express.Router();

router.get("/", getBlog);

router.post('/newblog', addBlog)

export default router;
