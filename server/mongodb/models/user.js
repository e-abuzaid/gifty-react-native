import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    picture: {type: String},
    people: [],
    events: [],
})

const UserSchema = mongoose.model('User', User)

export default UserSchema