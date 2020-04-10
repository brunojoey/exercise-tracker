const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        required: true
    }
});

const exerciseSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
});

const Workout = mongoose.model("Workouts", workoutSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = { Workout, Exercise };