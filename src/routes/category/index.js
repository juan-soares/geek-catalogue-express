const express = require("express");
const router = express.Router();
const { getCategories, putCategory } = require("../../controllers/category");
const {
  getSubcategories,
  postSubcategory,
  putSubcategory,
  deleteSubcategory,
} = require("../../controllers/category/subcategory");
const {
  getLanguages,
  postLanguage,
  putLanguage,
  deleteLanguage,
} = require("../../controllers/category/language");

router.get("/", getCategories);
router.put("/", putCategory);

router.get("/subcategory", getSubcategories);
router.post("/subcategory", postSubcategory);
router.put("/subcategory", putSubcategory);
router.delete("/subcategory", deleteSubcategory);

router.get("/language", getLanguages);
router.post("/language", postLanguage);
router.put("/language", putLanguage);
router.delete("/language", deleteLanguage);
module.exports = router;
