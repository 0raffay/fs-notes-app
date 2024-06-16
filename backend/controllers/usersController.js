const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

//@desc Get All users
//@route GET /users
//@access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
});

//@desc Create a user
//@route POST /users
//@access Private
const createUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const duplicate = await User.findOne({ username }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  const hPassword = await bcrypt.hash(password, 10);
  const userObject = { username, password: hPassword, roles };

  const user = await User.create(userObject);

  if (user) {
    res.status(200).json({ message: "New user has been created" });
  } else {
    res.status(400).json({ message: "Invalid user data recieved" });
  }
});

//@desc Update a user
//@route PATCH /users
//@access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, roles, active, password } = req.body;

  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== "boolean"
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findById(id).lean().exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate && duplicate._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  // Prepare the update data
  const updatedData = {
    username,
    roles,
    isActive: active,
  };

  if (password) {
    updatedData.password = await bcrypt.hash(password, 10);
  }

  // Update the user
  const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
    new: true,
  })
    .lean()
    .exec();

  if (!updatedUser) {
    return res.status(500).json({ message: "Failed to update user" });
  }

  res.json({ message: `${updatedUser.username} updated` });
});
//@desc Delete a user
//@route DELETE /users
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID required" });
  }

  const notes = await Note.findOne({ user: id }).lean().exec();

  if (notes?.length) {
    return res
      .status(400)
      .json({ message: "User has assigned notes", data: notes });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await user.deleteOne();

  res.json({ message: "User deleted successfully", data: result });
});

module.exports = { getUsers, createUser, updateUser, deleteUser };
