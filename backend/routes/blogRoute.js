/* eslint-disable no-undef */
const express = require("express");
const { addBlog, getBlog, deleteBlog, updateBlog } = require("../controller/blogs");

const router = express.Router();

router.get("/", getBlog);

router.post("/newblog", addBlog);

router.delete("/:id", deleteBlog);

router.put("/:id", updateBlog);

module.exports = router;
