const Category = require("../../models/category");
const globalMessages = require("../../globalMessages");

async function getCategories(req, res) {
  try {
    const categoriesList = await Category.find({})
      .populate("subcategories")
      .populate("languages");

    res
      .status(200)
      .json({ message: globalMessages.consultSuccess, data: categoriesList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putCategory(req, res) {
  const updateCategory = {
    name: req.body.name,
    subcategories: req.body.subcategories,
  };

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.body._id,
      updateCategory,
      { new: true }
    );

    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedCategory });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

module.exports = { getCategories, putCategory };
