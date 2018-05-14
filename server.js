const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// Import routes 
var apiRoutes = require("./routes/api-routes.js");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


//Run routes
app.use(apiRoutes);

//Require models
var db = require("./models")

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Start server
db.sequelize.sync().then(function () {
    // Start the API server
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
})