const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
    airport: {type: String},
    arrival: {type: Date}
})

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
        required: true,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        min: "2021-12-11T12:00",
        max: "2029-12-12T12:00"
    },
    destinations: [destinationSchema]
})


module.exports = mongoose.model('Flight', flightSchema)
