const db = require("../models");

module.exports = {
  userLogin: function (req, res) {
    res.json(req.user);
    console.log("passport test!: ", res.statusCode)

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
      // .then(createRes => {
      //   console.log(".then handler for create")
      //   createRes.status(200);
      // });
      .then(createResp => {
          console.log(createResp);
          // res.redirect(307, "/profile");
          res.json(createResp);
      })
      .catch(err => {
        console.log("************************************")
        console.log("************************************")
        console.log("************************************")
        console.log("************************************")
        console.log("************************************")
        console.log("error handler for create")
        console.log(err)

        console.log("************************************")
        console.log("************************************")
        console.log("************************************")
        console.log("************************************")
        console.log("************************************")
        console.log("************************************")
        console.log("************************************")
        
        res.status(500).send(err);
      });
  },
  findAllUsers: function (req, res) {
    db.User.findAll()
      .then(res => {
        console.log("this found all users!", res)
      })
  }
}
