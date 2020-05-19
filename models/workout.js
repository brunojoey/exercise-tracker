const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = require('./Exercise');

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [exerciseSchema],
}, { toJSON: { virtuals: true }
});

workoutSchema.virtual('totalDuration').get(function() {
    let totalDuration = 0;
    this.exercises.forEach(exercise => {
      totalDuration += exercise.duration;
    });
  
    return totalDuration;
  });
  
const Workout = mongoose.model('Workouts', workoutSchema);
module.exports = Workout;