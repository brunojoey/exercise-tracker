const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("/index.html");
});

router.get("/exercise", (req, res) => {
    db.workout.find({})
});

router.post("/stats", (req, res) => {

});

app.