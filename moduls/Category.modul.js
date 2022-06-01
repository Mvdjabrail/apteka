const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    name: String,
    discription: String,
})

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;