const express = require("express");
const router = express.Router();
const { postSearch } = require("../../controllers/search");

router.post("/", postSearch);

module.exports = router;
