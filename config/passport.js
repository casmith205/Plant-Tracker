var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  {
    usernameField: "userName",
    passwordField: "password"
  },
  function(username, password, done) {
    console.log("IM IN PASSPORT!!!!");
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        userName: username
      },
      include: [db.UserPlant, db.UserBadge, db.Friend],
    }).then(function(dbUser) {
      console.log(dbUser);
      // If there's no user with the given userName
      if (!dbUser) {
        console.log("not found");
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given userName, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        console.log("nope wrong password");
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      console.log("yay you're in!")
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
