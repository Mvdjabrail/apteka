const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    user: {
        ref: 'User',
        type: mongoose.SchemaTypes.ObjectId
    },
    product: [{
        ref: 'Drugs',
        type: mongoose.SchemaTypes.ObjectId
    }],
    sum: {
        type: Number,
        default: 0
    }

})

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;