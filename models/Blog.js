const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: String,
    body: String,
    image: String,
    name: String,
    gender: String,
    dob: String,
    martialStatus: String,
    countryLivingIn: String,
    city: String,
    height: Number,
    weight: Number,
    complexion: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
