import mongoose from "mongoose";

const HostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  stayedBefore: { type: Boolean, required: true },
  yearsStayed: { type: Number, default: 0 },
  rentalPrice: { type: Number, required: true },
  discount: { type: Number, required: true },
});

const HostelModel = mongoose.model("tests", HostelSchema);
export default HostelModel;
