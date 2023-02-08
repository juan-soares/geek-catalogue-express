const Category = require("../../../models/category");
const Resolution = require("../../../models/category/resolution");
const globalMessages = require("../../../globalMessages");

async function getResolutions(req, res) {
  try {
    const resolutionsList = await Resolution.find({});
    res.status(200).json({
      message: globalMessages.consultSuccess,
      data: resolutionsList,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postResolution(req, res) {
  const newResolution = new Resolution({
    name: req.body.name,
  });

  try {
    await newResolution.save();
    const updatedList = await Resolution.find({});
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putResolution(req, res) {
  const updateResolution = {
    name: req.body.name,
  };

  try {
    const updatedResolution = await Resolution.findByIdAndUpdate(
      req.body._id,
      updateResolution,
      { new: true }
    );
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedResolution });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteResolution(req, res) {
  try {
    const categoryCollection = await Category.find({});
    categoryCollection.map(async (item) => {
      item.resolutions.find((s) => s !== req.body._id);
      await Category.findByIdAndUpdate(item._id, item);
    });
    await Resolution.findByIdAndDelete(req.body._id);
    const updatedList = await Resolution.find({});

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
  getResolutions,
  postResolution,
  putResolution,
  deleteResolution,
};
