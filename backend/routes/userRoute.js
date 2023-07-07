/* eslint-disable no-undef */
const express = require("express");
const { user } = require("../controller/users");

const router = express.Router();

router.post("/new-user", user);

module.exports = router;
