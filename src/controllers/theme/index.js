const Theme = require("../../models/theme");
const globalMessages = require("../../globalMessages");

async function getThemes(req, res) {
  try {
    const themesList = await Theme.find({});

    res
      .status(200)
      .json({ message: globalMessages.consultSuccess, data: themesList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postTheme(req, res) {
  const newTheme = new Theme({
    name: req.body.name,
    elements: req.body.elements,
  });

  try {
    await newTheme.save();
    const updatedList = await Theme.find({});
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putTheme(req, res) {
  const updateTheme = {
    name: req.body.name,
    elements: req.body.elements,
  };

  try {
    const updatedEdition = await Theme.findByIdAndUpdate(
      req.body._id,
      updateTheme,
      { new: true }
    );
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updateTheme });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteTheme(req, res) {
  try {
    await Theme.findByIdAndDelete(req.body._id);
    const updatedList = await Theme.find({});

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
  getThemes,
  postTheme,
  putTheme,
  deleteTheme,
};
