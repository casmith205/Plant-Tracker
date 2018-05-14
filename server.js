const express = require("express");
const path = require("path");
// Import routes 
var apiRoutes = require("./routes/api-routes.js");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const passport   = require("./config/passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


//Run routes
app.use(apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

//Models
var models = require("./models");

// Routes
var authRoute = require('./routes/auth.js')(app);
 
//Sync Database
models.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
  

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
