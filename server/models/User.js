import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  scores: [Number],
});

export default mongoose.model("User", userSchema);