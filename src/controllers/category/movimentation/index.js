const Movimentation = require("../../../models/category/movimentation");
const globalMessages = require("../../../globalMessages");

async function getMovimentations(req, res) {
  try {
    const movimentationsList = await Movimentation.find({});
    res.status(200).json({
      message: globalMessages.consultSuccess,
      data: movimentationsList,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postMovimentation(req, res) {
  const newMovimentation = new Movimentation({
    name: req.body.name,
  });

  try {
    await newMovimentation.save();
    const updatedList = await Movimentation.find({});
    res
      .status(200)
      .json({ message: globalMessages.saveSuccess, data: updatedList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function putMovimentation(req, res) {
  const updateMovimentation = {
    name: req.body.name,
  };

  try {
    const updatedMovimentation = await Movimentation.findByIdAndUpdate(
      req.body._id,
      updateMovimentation,
      { new: true }
    );
    res.status(200).json({
      message: globalMessages.saveSuccess,
      data: updatedMovimentation,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function deleteMovimentation(req, res) {
  try {
    const categoryCollection = await Category.find({});
    categoryCollection.map(async (item) => {
      item.movimentations.find((s) => s !== req.body._id);
      await Category.findByIdAndUpdate(item._id, item);
    });
    await Movimentation.findByIdAndDelete(req.body._id);
    const updatedList = await Movimentation.find({});

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
  getMovimentations,
  postMovimentation,
  putMovimentation,
  deleteMovimentation,
};
