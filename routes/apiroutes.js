const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");

const databaseURL = "workout";
const collection = ['workouts'];

const db = mongojs(databaseURL, collection);

router.get("/api/workouts", (req, res) => {
    db.workouts.find({ }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.put("/api/workouts/:id", (req, res) => {
    db.workouts.updateOne({_id: mongojs.ObjectID(req.params.id)}, {$push: {exercises: req.body}}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        };
    });
});

router.post("/api/workouts", ({ body }, res) => {
    const workout = body;
    body.day = new Date().setDate(new Date().getDate());
    db.workouts.insert(workout, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    })
});

router.get("/api/workouts/:range", (req, res) => {
    db.workouts.find({}, (err, data) => {   
        if (err) {
            console.log(err) ;
        } else {
            res.json(data);
        }
    })
});