import mongoose from 'mongoose'

const Event = new mongoose.Schema({
    name: {type: String, required: true},
    people: [],
    date: {type: String, required: true},
    picture: {type: String},
})

const EventSchema = mongoose.model('Event', Event)

export default EventSchema