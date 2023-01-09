const User = require("../../models/user");
const globalMessages = require("../../globalMessages");

async function getUsers(req, res) {
  try {
    const usersList = await User.find({});

    res
      .status(200)
      .json({ message: globalMessages.consultSuccess, data: usersList });
  } catch (error) {
    res.status(400).json({ message: globalMessages.consultFail + error });
  }
}

module.exports = { getUsers };
