import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached
    this.progress += exercise.caloriesBurned;

    if (this.progress >= this.goal) {
      // Emit 'goalReached' event if the goal is reached
      this.emit('goalReached');
    }
  }
}

const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal
  const tracker = new FitnessTracker();

  // Define listener that sends a congratulatory message to the user upon reaching their fitness goal
  const congratulatoryMessageListener = () => {
    console.log("Congratulations! You have reached your fitness goal");
    // Here you can also implement code to send a message to the user (e.g., via push notification, email, etc.)
  };

  // Set up the listener for the 'goalReached' event
  tracker.on('goalReached', congratulatoryMessageListener);

  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
