const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryType: String,
});

module.exports = mongoose.model("Category", CategorySchema);
