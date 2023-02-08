const express = require("express");
const router = express.Router();
const {
  getThemes,
  postTheme,
  putTheme,
  deleteTheme,
} = require("../../controllers/theme");

router.get("/", getThemes);
router.post("/", postTheme);
router.put("/", putTheme);
router.delete("/", deleteTheme);

module.exports = router;
