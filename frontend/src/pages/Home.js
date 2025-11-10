import React, { useEffect, useState } from "react";

function Home() {
  // workouts = stores the fetched workout data (state)
  // setWorkouts = function to update workouts and re-render the component
  const [workouts, setWorkouts] = useState();

  // it is used to perform a task when there is a change in state of variable and if left empty then when page loads it is defined in the second argument [] so iit iis used for work to do after a component renders
  useEffect(() => {
    const fetchWorkouts = async () => {
      // fetch send a get request to this url and response contains the javascript response object that browser returns
      const response = await fetch("/api/workouts");
      // response.json() converts the returned json format into a javascript object and since reading and parsing may take time we use await
      const json = await response.json();

      /*Imagine the server sent you a sealed package 📦 (response --> http object).
  response.json() is like opening the box and taking out the useful item inside (the parsed data).
  await means you wait until the box is fully opened before trying to use what’s inside. */

      // here response is a http object that has property like ok to get status and more but when we do response.json() no we get only the request body the actual data in json format and it can't have properties like ok
      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => {
          return(

            <p key={workout._id}>{workout.title}</p>
          )}
          )
        }
      </div>
    </div>
  );
}

export default Home;
