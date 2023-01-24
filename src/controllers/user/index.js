const User = require("../../models/user");
const globalMessages = require("../../globalMessages");

async function getUsers(req, res) {
  try {
    const usersList = await User.find({});
    res
      .status(200)
      .json({ message: globalMessages.consultSuccess, data: usersList });
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}

async function postUser(req, res) {
  try {
    const searchedUser = await User.find({ email: req.body.email });

    if (searchedUser.length && searchedUser[0].password === req.body.password) {
      res.status(200).json({
        message: globalMessages.consultSuccess,
        data: { nickname: searchedUser[0].nickname },
      });
    } else {
      res.status(404).json({
        message: globalMessages.consultNotFound,
        data: { nickname: "" },
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: globalMessages.consultFail + error, data: null });
  }
}
module.exports = { getUsers, postUser };
