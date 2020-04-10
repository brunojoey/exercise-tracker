const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date
    }
});

const Workout = mongoose.model("Workouts", workoutSchema);
module.exports = Workout;