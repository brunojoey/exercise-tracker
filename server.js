const mongoose = require("mongoose");
const express = require("express");

// Sets up PORT
const PORT = process.env.PORT || 3000;

// Initializes app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets static directory
app.use(express.static("public"));

// Requires to use the API Routes file
const apiRoutes = require("./routes/apiroutes");
app.use(apiRoutes);

// Requires to use the HTML Routes file
const htmlRoutes = require("./routes/htmlroutes");
app.use(htmlRoutes);

// Connects to Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// App listens to PORT that is called on line 4
app.listen(PORT, () => {
    console.log(`Application running on ${PORT}`);
});