import { Flight } from '../models/flight.js'

function index(req, res){
  Flight.find({}).sort({departs: 'asc'}).exec ((error, flights) => {
    console.log(error)
    res.render("flights/", {
      error,
      flights
    })
  })
}


function newFlight(req, res) {
  res.render('flights/new')
  flight: "Add Flight"
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.render('/flight/new')
    res.redirect('/flights/')
  })
}

function show(req, res){
  Flight.findById(req.params.id)
  .populate('meals')
  .exec(function(err, flight) {
    Meal.find({_id: {$nin: flight.meals}}, function(err, meals) {
      res.render('flights/show', {
        title: 'Flight Details', 
        flight,
        meals
      })
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addMeal(req, res){
  Flight.findById(req.params.id, function(err,flight){
    flight.meals.push(req.body.mealId)
    flight.save(function (err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(err, flight){
    res.redirect("/flights")
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
  createTicket,
  addMeal,
  deleteFlight as delete,
}