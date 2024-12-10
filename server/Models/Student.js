import mongoose from "mongoose";
const StudentSchema = mongoose.Schema({
  studId: {
    type: String,
    required: true,
  },
  studName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
});
const ModelStudent = mongoose.model("studentinfos", StudentSchema);
export default ModelStudent;
