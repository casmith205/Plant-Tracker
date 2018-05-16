const db = require("../models");

module.exports = {
    userLogin: function (req, res) {
      res.json(req.user);
      console.log("passport test!: ", res.statusCode);
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
    findAllUsers: function (req, res) {
      db.User.findAll()
      .then(res => {
        console.log("this found all users!", res)
      })
    }
}