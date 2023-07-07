/* eslint-disable no-undef */
const express = require("express");
const { addBlog, getBlog } = require("../controller/blogs");

const router = express.Router();

router.get("/", getBlog);

router.post("/newblog", addBlog);

module.exports = router;
