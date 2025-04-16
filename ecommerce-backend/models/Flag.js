const mongoose = require("mongoose");

const FlagSchema = new mongoose.Schema({
  code: String,
  name: String,
  flag: String,
  weblink: String,
});

module.exports = mongoose.model("Flag", FlagSchema);
