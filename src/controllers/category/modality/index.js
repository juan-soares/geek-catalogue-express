const Modality = require("../../../models/category/modality");
const globalMessages = require("../../../globalMessages");

async function getModalities(req, res) {
  try {
    const modalitiesList = await Modality.find({});
    res.status(200).json({
      message: globalMessages.consultSuccess,
      data: modalitiesList,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postModality(req, res) {
  const newModality = new Modality({
    name: req.body.name,
  });

  try {
    await newModality.save();
    const updatedList = await Modality.find({});
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putModality(req, res) {
  const updateModality = {
    name: req.body.name,
  };

  try {
    const updatedModality = await Modality.findByIdAndUpdate(
      req.body._id,
      updateModality,
      { new: true }
    );
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedModality });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteModality(req, res) {
  try {
    await Modality.findByIdAndDelete(req.body._id);
    const updatedList = await Modality.find({});

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
  getModalities,
  postModality,
  putModality,
  deleteModality,
};
