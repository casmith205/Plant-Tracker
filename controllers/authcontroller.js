const db = require("../models");
// const passport = require("../config/passport");

module.exports = {
    userLogin: function (req, res) {
      res.json("/profile");
      console.log("passport test!: ", req.body);
    },
    userSignUp: function (req, res) {
      console.log("in userSignUp");
      db.User
        .create({
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          cellPhone: req.body.cellPhone,
          address: req.body.address,
          zipCode: req.body.zipCode
        })
        .then(res.redirect(307, "/api/login"))
        .catch(err => res.status(422).json(err));
    },
}