const express = require("express");
const router = express.Router();
const { getCategories, putCategory } = require("../../controllers/category");
const {
  getEditions,
  postEdition,
  putEdition,
  deleteEdition,
} = require("../../controllers/category/edition");
const {
  getGenres,
  postGenre,
  putGenre,
  deleteGenre,
} = require("../../controllers/category/genre");
const {
  getModalities,
  postModality,
  putModality,
  deleteModality,
} = require("../../controllers/category/modality");
const {
  getMovimentations,
  postMovimentation,
  putMovimentation,
  deleteMovimentation,
} = require("../../controllers/category/movimentation");
const {
  getResolutions,
  postResolution,
  putResolution,
  deleteResolution,
} = require("../../controllers/category/resolution");

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

router.get("/edition", getEditions);
router.post("/edition", postEdition);
router.put("/edition", putEdition);
router.delete("/edition", deleteEdition);

router.get("/genre", getGenres);
router.post("/genre", postGenre);
router.put("/genre", putGenre);
router.delete("/genre", deleteGenre);

router.get("/modality", getModalities);
router.post("/modality", postModality);
router.put("/modality", putModality);
router.delete("/modality", deleteModality);

router.get("/movimentation", getMovimentations);
router.post("/movimentation", postMovimentation);
router.put("/movimentation", putMovimentation);
router.delete("/movimentation", deleteMovimentation);

router.get("/resolution", getResolutions);
router.post("/resolution", postResolution);
router.put("/resolution", putResolution);
router.delete("/resolution", deleteResolution);

module.exports = router;
