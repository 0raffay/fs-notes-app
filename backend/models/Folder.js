const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const FolderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
  },
  {
    timestamps: true,
  }
);

FolderSchema.plugin(AutoIncrement, {
  inc_field: "id",
  id: "folderId",
  start_seq: 0,
});

module.exports = mongoose.model("Folder", FolderSchema);
