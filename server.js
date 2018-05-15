const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const passport   = require("./config/passport");
const session = require("express-session");
const apiRoutes = require("./routes/api/api-routes.js");
const app = express();
const models = require("./models");
const PORT = process.env.PORT || 3001;
const sendText =require("./routes/alerts/text.js");


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



// Serve up static assets
app.use(express.static("client/build"));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

// Add routes, both API and view
app.use(apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    // res.sendFile(path.join(__dirname, "./client/build/index.html"));
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


//Sync Database
models.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s.", PORT);
    });
});

