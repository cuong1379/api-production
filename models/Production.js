const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    quantity: {
        type: Number,
    },

    
})

module.exports = mongoose.model('Production', productionSchema)