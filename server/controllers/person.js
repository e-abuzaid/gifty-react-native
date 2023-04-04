import Person from '../mongodb/models/person.js'
import Event from '../mongodb/models/event.js'
import mongoose from 'mongoose'
import express from 'express'
import * as dotenv from 'dotenv'


const router = express.Router()

export const getPeople = async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json({data: people})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getPersonBySearch = async (req, res) => {
   
}

export const getPerson = async (req, res) => {
    const {id} = req.params

    try {
        const person = await Person.findById(id)
        res.status(200).json(person)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPerson = async (req, res) => {
    const person = req.body
    try {
        const newPerson = new Person(person)
        const newBirthdayEvent = new Event({
            name: 'Birthday',
            people: [newPerson],
            date: person.dob,
            picture: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,f_auto,q_60,w_750/v1/goldenapron/636d99989fdc2'
        })
        await newBirthdayEvent.save()
        await newPerson.save()
        if (person.relationship === 'Partner') {
            const newEvent = new Event({
                name: 'Anniversary',
                people: [newPerson],
                date: person.anniversary,
                picture: 'https://images.ctfassets.net/iyiurthvosft/34CGIfinmuBbubQuEKmKRc/5aa2de9aaf6e1bbac3126d95a9cd96d1/iStock-860821478.jpg?fm=jpg&fl=progressive&q=50&w=1200'
            })
            const valentines = new Event({
                name: "Valentine's",
                people: [newPerson],
                date: "14/02/2024",
                picture: 'http://www.dynamitenews.com/images/2019/02/13/valentines-day-2019-celebrating-day-of-love-in-a-healthy-manner/36ad0ba.jpg'
            })
            await newEvent.save()
            await valentines.save()
        }
        res.status(201).json(newPerson)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deletePerson = async (req, res) => {
    const {id} = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Person with that id')
        await Person.findByIdAndDelete(id)
        await Event.updateMany(
            { 'people._id': id },
            { $pull: { people: { _id: id } } }
        )
        res.json({message: 'Person deleted successfully'})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}