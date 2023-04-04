import Event from '../mongodb/models/event.js'
import mongoose from 'mongoose'
import express from 'express'


const router = express.Router()

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
        console.log(events)
        res.status(200).json({data: events})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getPersonBySearch = async (req, res) => {
   
}

export const getEvent = async (req, res) => {
    const {id} = req.params

    try {
        const event = await Event.findById(id)
        res.status(200).json(event)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createEvent = async (req, res) => {
    const event = req.body
    const newEvent = new Event(event)
    try {
        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteEvent = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Person with that id')
    await Event.findByIdAndDelete(id)
    res.json({message: 'Event deleted successfully'})
}

export const updateEvent = async (req, res) => {
    const {id} = req.params
    const eventUpdates = req.body
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, eventUpdates, {new: true})
        res.status(200).json(updatedEvent)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}