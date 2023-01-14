const BoardGame = require("../../models/boardGame");
const globalMessages = require("../../globalMessages/index");

async function postSearch(req, res) {
  try {
    const boardGameList = await BoardGame.find({});

    const boardGameListFiltered = boardGameList.filter((item) =>
      item.nameUsa.includes(req.body.inputValue)
    );

    let totalResults = [...boardGameListFiltered];

    res
      .status(200)
      .json({ message: globalMessages.consultSuccess, data: totalResults });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

module.exports = { postSearch };
