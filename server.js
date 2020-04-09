const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true });

app.get("/", (req, res) {
    res.sendFile("/index.html");
});

app.listen(PORT, () => {
    console.log(`Application running on ${PORT}`);
});