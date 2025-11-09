//connects to mongodb using mongoose 
const mongoose = require('mongoose')

//schema is a blueprint or a data template to define structure of a document can be thought of as a class
const Schema = mongoose.Schema

//here we create a schema or a class that holds the structure for workout objects 
const workoutSchema = new Schema({
    // defines type and if the data is required
    title: {
        type: String,
        required : true
    },
    reps:{
        type: Number,
        required : true
    },
    load : {
        type: Number,
        required : true
    }
}, {timestamps : true /* automatically adds a timestamp saying when the object was created */})

module.exports = mongoose.model('Workout', workoutSchema )

