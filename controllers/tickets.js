const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Flight.findById(req.params.flightId, function (error, flight) {
        Ticket.find({}, function (err, ticket) {
            res.render('tickets/new', { title: 'Add Ticket', flight })
        })
    })
}

function create(req, res) {
    Flight.findById(req.params.flightId, function (err, flight) {
        req.body.flight = req.params.flightId
        const ticket = new Ticket(req.body)
        ticket.save(function (err, ticket) {
            console.log(ticket)
            res.redirect(`/flights/${flight._id}`)
        })
    })
}



