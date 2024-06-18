const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  folders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder",
    },
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
}, {
  timestamps: true,
});

UserSchema.plugin(AutoIncrement, {
  inc_field: "id",
  id: "userId",
  start_seq: 0,
});

module.exports = mongoose.model("User", UserSchema);
