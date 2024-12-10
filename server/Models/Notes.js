import mongoose from "mongoose";
const NoteSchema = mongoose.Schema(
  {
    noteMsg: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false, // Set to false to disable updatedAt
    },
  }
);
const NoteModel = mongoose.model("notes", NoteSchema);
export default NoteModel;
