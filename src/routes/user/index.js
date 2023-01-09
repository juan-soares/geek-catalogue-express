const express = require("express");
const router = express.Router();
const { getUsers } = require("../../controllers/user");

router.get("/", getUsers);

module.exports = router;
