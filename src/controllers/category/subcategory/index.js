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
    const savedNewsubcategory = await newSubcategory.save();
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: savedNewsubcategory });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteSubcategory(req, res) {
  try {
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

module.exports = { getSubcategories, postSubcategory, deleteSubcategory };
