import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new')
}

function create(req, res) {
  
}


export {
  newFlight as new,
  create,
}