import express from 'express'
import {getEvents, getEvent, deleteEvent, createEvent, updateEvent} from '../controllers/event.js'


const router = express.Router()

router.get('/', getEvents)
router.post('/', createEvent)
router.delete('/:id', deleteEvent)
router.get('/:id', getEvent)
router.put('/:id', updateEvent)

export default router