const Category = require("../../models/category");
const globalMessages = require("../../globalMessages");

async function getCategories(req, res) {
  try {
    const categoriesList = await Category.find({}).populate("subcategories");
    res
      .status(200)
      .json({ message: globalMessages.consultSuccess, data: categoriesList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postCategories(req, res) {
  const newCategory = new Category({
    name: req.body.name,
  });

  try {
    //const savedNewCategory = await newCategory.save();
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: newCategory });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

module.exports = { getCategories, postCategories };
