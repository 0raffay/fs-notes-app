const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");

// @desc Get notes of user by user ID
// @route GET /notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "Please provide param 'userId'" });
  }

  const notes = await Note.find({ user: userId }).lean();
  if (!notes?.length) {
    return res.status(400).json({ message: "No notes found" });
  }

  res.json(notes);
});

// @desc Get a single note by note ID
// @route GET /notes/:id
// @access Private
const getNoteById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id).lean();
  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  res.json(note);
});

// @desc Create a new note
// @route POST /notes/create
// @access Private
const createNote = asyncHandler(async (req, res) => {
  const { userId, title, text, folderId, tags } = req.body;

  if (!userId || !title || !text) {
    return res
      .status(400)
      .json({ message: "Please provide required parameters" });
  }

  const noteObject = {
    user: userId,
    title,
    text,
    folder: folderId,
    tags,
  };

  const note = await Note.create(noteObject);
  if (note) {
    res.status(200).json({ message: "New note has been created", data: note });
  } else {
    res.status(400).json({ message: "Invalid note data received" });
  }
});

// @desc Update an existing note
// @route PUT /notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const { noteId, title, text, folderId, tags } = req.body;

  if (!title || !text) {
    return res
      .status(400)
      .json({ message: "Please provide required parameters" });
  }

  const note = await Note.findById(noteId);

  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  note.title = title;
  note.text = text;
  note.folder = folderId;
  note.tags = tags;

  const updatedNote = await note.save();

  res.status(200).json({ message: "Note has been updated", data: updatedNote });
});

// @desc Delete a note
// @route DELETE /notes/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);

  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  await note.remove();

  res.status(200).json({ message: "Note has been deleted" });
});

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
