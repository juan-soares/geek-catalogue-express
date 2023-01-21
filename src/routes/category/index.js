const express = require("express");
const router = express.Router();
const { getCategories, postCategories } = require("../../controllers/category");
const {
  getSubcategories,
  postSubcategory,
  deleteSubcategory,
} = require("../../controllers/category/subcategory");

router.get("/", getCategories);
router.post("/", postCategories);

router.get("/subcategory", getSubcategories);
router.post("/subcategory", postSubcategory);
router.delete("/subcategory", deleteSubcategory);

module.exports = router;
