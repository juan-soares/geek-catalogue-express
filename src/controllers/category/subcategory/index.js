const Category = require("../../../models/category");
const Subcategory = require("../../../models/category/subcategory");
const globalMessages = require("../../../globalMessages");

async function getSubcategories(req, res) {
  try {
    const SubcategoriesList = await Subcategory.find({});
    res.status(200).json({
      message: globalMessages.consultSuccess,
      data: SubcategoriesList,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postSubcategory(req, res) {
  const newSubcategory = new Subcategory({
    name: req.body.name,
  });

  try {
    await newSubcategory.save();
    const updatedList = await Subcategory.find({});
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putSubcategory(req, res) {
  const updateSubcategory = {
    name: req.body.name,
  };

  try {
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(
      req.body._id,
      updateSubcategory,
      { new: true }
    );
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedSubcategory });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteSubcategory(req, res) {
  try {
    const categoryCollection = await Category.find({});
    categoryCollection.map(async (item) => {
      item.subcategories.find((s) => s !== req.body._id);
      await Category.findByIdAndUpdate(item._id, item);
    });

    await Subcategory.findByIdAndDelete(req.body._id);
    const updatedList = await Subcategory.find({});

    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

module.exports = {
  getSubcategories,
  postSubcategory,
  putSubcategory,
  deleteSubcategory,
};
