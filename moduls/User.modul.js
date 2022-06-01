const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:String,
    cash:Number,
    isRecepte:{
        type: Boolean,
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;