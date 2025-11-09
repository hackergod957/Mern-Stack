const Workout = require("../models/Workout");
const mongoose = require("mongoose");
// get all workouts
const getWorkouts = async (req, res) => {
  // here we await for all workout documents to be stored in workouts from the db and then send it in json format but first we sort them in descending order of their create time . find({}) if left empty is used to get all but we can add a object to get a specific one like // Find all workouts with title "Situps" const situps = await Workout.find({ title: "Situps" });
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get single workouts

const getWorkout = async (req, res) => {
  // destructuring req param to get id variable from url
  const { id } = req.params;

  //this is because mongoose gives a error if the id doesn't match the objectid type so we just want to give a msg
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout" });
  }
  //this is for finding the workout by its specific id
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such Workout" });
  }
  //returning a successful code
  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  // adds document to the database
  try {
    // awaits this function while running others and waits for the document to be created and added in the database
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout); // returns a response code with the json of the created document
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
    // we get id
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout Exists" });
  }

  //use this to find and delete and object also store it in workout
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    res.status(400).json({ error: "Workout Doesn't Exist" });
  }

  res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
    // const {title,load,reps} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout Exists" });
  }

  //use this to find and update and object also store the old object it in workout
  const workout = await Workout.findOneAndUpdate({_id: id}, 
    {
        // title :  title,
        // reps : reps,
        // load : load

      /* `...req.body` is using the spread syntax in JavaScript to spread the properties of the
      `req.body` object into the object being passed to the `findOneAndUpdate` method. This allows
      you to update the workout document with the properties sent in the request body without
      explicitly specifying each property. It is a concise way to include all the properties from
      `req.body` in the update operation. */
         ...req.body
    }
  )

  if(!workout){
    res.status(400).json({error : "Workout doesn't exist"})
  }

  res.status(200).json(workout)

};

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
};
