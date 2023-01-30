const Edition = require("../../../models/category/edition");
const globalMessages = require("../../../globalMessages");

async function getEditions(req, res) {
  try {
    const editionsList = await Edition.find({});
    res.status(200).json({
      message: globalMessages.consultSuccess,
      data: editionsList,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postEdition(req, res) {
  const newEdition = new Edition({
    name: req.body.name,
  });

  try {
    await newEdition.save();
    const updatedList = await Edition.find({});
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putEdition(req, res) {
  const updateEdition = {
    name: req.body.name,
  };

  try {
    const updatedEdition = await Edition.findByIdAndUpdate(
      req.body._id,
      updateEdition,
      { new: true }
    );
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedEdition });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteEdition(req, res) {
  try {
    await Edition.findByIdAndDelete(req.body._id);
    const updatedList = await Edition.find({});

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
  getEditions,
  postEdition,
  putEdition,
  deleteEdition,
};
