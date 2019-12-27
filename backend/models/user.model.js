const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    username: { type: String, required: true },
    gender: { type: String, default: "male" },
    dob: { type: Date, required: true },
    news: { type: String, required: true },
    email: { type: String, default: "male", required: true },
    photo: {
      type: String,
      default: "https://img.icons8.com/bubbles/50/000000/user.png"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", usersSchema);

module.exports = User;
