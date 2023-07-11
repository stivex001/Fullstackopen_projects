/* eslint-disable no-undef */
const express = require("express");
const { addBlog, getBlog, deleteBlog } = require("../controller/blogs");

const router = express.Router();

router.get("/", getBlog);

router.post("/newblog", addBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
