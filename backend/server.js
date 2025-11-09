require("dotenv").config();

const express = require("express"); // here we have imported export using require which is the keyword for import in node js which uses commonjs keywords.

//here we have required mongoose which is used to add a layer of structure on top of mongodb example if we have a blog then we use mongoose to say a blog should have a title a body and a conclusion if it doesn't then the data isn't entered also it helps to connect mongodb as well
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

// creates express app by allowing us to call function for the app
const app = express();

// checks iif the request sends data and if it does then attaches it to the req object in json format
app.use(express.json());

//this says that wherever someone comes in this route (/api/workouts)  use the workoutRoutes
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // starts to listen for requests on a port and runs the function given , here process refers to the info of the os and process.env returns a object containing all environment variables and PORT tells it to give the env variable named port.
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
