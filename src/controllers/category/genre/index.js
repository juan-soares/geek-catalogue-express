const Genre = require("../../../models/category/genre");
const globalMessages = require("../../../globalMessages");

async function getGenres(req, res) {
  try {
    const genresList = await Genre.find({});
    res.status(200).json({
      message: globalMessages.consultSuccess,
      data: genresList,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postGenre(req, res) {
  const newGenre = new Genre({
    name: req.body.name,
  });

  try {
    await newGenre.save();
    const updatedList = await Genre.find({});
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putGenre(req, res) {
  const updateGenre = {
    name: req.body.name,
  };

  try {
    const updatedGenre = await Genre.findByIdAndUpdate(
      req.body._id,
      updateGenre,
      { new: true }
    );
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedGenre });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteGenre(req, res) {
  try {
    await Genre.findByIdAndDelete(req.body._id);
    const updatedList = await Genre.find({});

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
  getGenres,
  postGenre,
  putGenre,
  deleteGenre,
};
