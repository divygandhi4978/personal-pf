import mongoose from "mongoose";

const form = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  org: { type: String},
  msg: { type: String, required: true },
  date: { type:Date, default: Date.now() },
});

export default mongoose.models.Form || mongoose.model("Form", form);
