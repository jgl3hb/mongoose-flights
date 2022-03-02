import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// Get /flights/new
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)


export {
  router
}
