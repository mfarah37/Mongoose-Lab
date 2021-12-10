const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
        default: 'American'
    },
    airport: {
        type: String,
        required: true,
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        }
    }
})

module.exports = mongoose.model('Flight', flightSchema)
