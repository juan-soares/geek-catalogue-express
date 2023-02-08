const Category = require("../../../models/category");
const Language = require("../../../models/category/language");
const globalMessages = require("../../../globalMessages");

async function getLanguages(req, res) {
  try {
    const languagesList = await Language.find({});
    res.status(200).json({
      message: globalMessages.consultSuccess,
      data: languagesList,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postLanguage(req, res) {
  const newLanguage = new Language({
    name: req.body.name,
  });

  try {
    await newLanguage.save();
    const updatedList = await Language.find({});
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putLanguage(req, res) {
  const updateLanguage = {
    name: req.body.name,
  };

  try {
    const updatedLanguage = await Language.findByIdAndUpdate(
      req.body._id,
      updateLanguage,
      { new: true }
    );
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedLanguage });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteLanguage(req, res) {
  try {
    const categoryCollection = await Category.find({});
    categoryCollection.map(async (item) => {
      item.languages.find((s) => s !== req.body._id);
      await Category.findByIdAndUpdate(item._id, item);
    });
    await Language.findByIdAndDelete(req.body._id);
    const updatedList = await Language.find({});

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
  getLanguages,
  postLanguage,
  putLanguage,
  deleteLanguage,
};
