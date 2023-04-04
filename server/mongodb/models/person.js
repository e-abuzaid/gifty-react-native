import mongoose from 'mongoose'

const Person = new mongoose.Schema({
    name: {type: String, required: true},
    dob: {type: String, required: true},
    gender: {type: String, required: true},
    relationship: {type: String, required: true},
    occupation: {type: String, required: true},
    interests: [String],
    anniversary: {type: String},
    picture: {type: String},
})

const PersonSchema = mongoose.model('Person', Person)

export default PersonSchema