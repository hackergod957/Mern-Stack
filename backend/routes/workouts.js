const express = require('express')

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,

} = require('../controllers/workoutController')

const Workout = require('../models/Workout')
//creates a sub app which has its own path
const router = express.Router()

// for example if you go in a colony then a / represents the main building but if you go in a home now if you say / then i  represents the main room so its just relative path

//this gives all the workouts
router.get('/',getWorkouts)

//this gives a single workout as :id acts as a variable which we can use to get workout of a specific id
router.get('/:id' ,getWorkout)

//this adds a workout 
router.post('/',createWorkout)

//deletes a workout
router.delete('/:id',deleteWorkout)

// updates a workout
router.patch('/:id',updateWorkout)

//this make it so that this router can be used outside
module.exports = router