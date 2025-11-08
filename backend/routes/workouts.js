const express = require('express')

//creates a sub app which has its own path
const router = express.Router()

// for example if you go in a colony then a / represents the main building but if you go in a home now if you say / then i  represents the main room so its just relative path

//this gives all the workouts
router.get('/',(req,res) =>  {
    res.json({mssg: "GET ALL WORKOUTS"})
})

//this gives a single workout as :id acts as a variable which we can use to get workout of a specific id
router.get('/:id' , (req,res) => {
    res.json({mssg:"get a single workout"})
})

//this adds a workout 
router.post('/',(req,res) => {
    res.json({mssg : " Post a new workout"})
})

//deletes a workout
router.delete('/:id',(req,res) => {
    res.json({mssg : " delete a  workout"})
})

// updates a workout
router.patch('/:id',(req,res) => {
    res.json({mssg : " Update a  workout"})
})

//this make it so that this router can be used outside
module.exports = router