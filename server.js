const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");
const passport   = require("./config/passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
