const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,

}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', {
            title: 'All Flights',
            flights
        })
    })
}

function newFlight(req, res) {
    const newFlight = new Flight()
    const dt = newFlight.departs
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate, title: 'Add Flight' })
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function (err) {
        if (err) return res.redirect('/flights/new')
        res.redirect('/flights')
    })
}

function show(req, res) {
    const newFlight = new Flight()
    const dt = newFlight.departs
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;

    Flight.findById(req.params.flightId, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', { title: 'Flight Info', flight, departsDate, tickets })
        })
    })
}



