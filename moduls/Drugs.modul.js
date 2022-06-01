const mongoose = require('mongoose')
const drugsSchema = mongoose.Schema ({
    name: String,
    price: Number,
    category:{
        ref: 'Category',
        type: mongoose.SchemaTypes.ObjectId
    },
    recept:{
        type: Boolean,

    }
})


const Drugs = mongoose.model("Drugs",drugsSchema);
module.exports = Drugs;