const Folder = require("../models/Folder");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

//@desc Get All users
//@route GET /folders
//@access Private
const getFolders = asyncHandler(async (req, res) => {
  const folders = await Folder.find().lean();
  if (!folders?.length) {
    return res.status(400).json({ message: "No folders found" });
  }

  res.json(folders);
});

module.exports = { getFolders };
