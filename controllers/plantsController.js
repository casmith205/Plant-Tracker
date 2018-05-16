const db = require("../models");

// Defining methods for the booksController
module.exports = {
  handleLogin: function (req, res) {
    //placeholder, currently being done in the apiRoutes file for testing
    console.log("inside handleLogin")
    res.status(200).json("success")
  },
  // GET - /api/user by email  req.query.email
  //   plantsController.findUser -> Sequelize find 
  findUser: function (req, res) {
    console.log("in findUser");
    db.User.find({
      where: {
        id: req.query.email
      },
      // include: [db.UserPlant, db.UserBadge, db.Friend]
      include: [db.UserPlant, db.UserBadge, db.Friend],

    }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // GET - /api/user/:id  by req.params.id
  //   plantsController.findUserById -> Sequelize find
  findUserById: function (req, res) {
    console.log("in findUserById", req.params.id);
    db.User.find({
      where: {
        id: req.params.id
      },
      // include: [db.UserPlant, db.UserBadge, db.Friend]
      include: [
        db.UserPlant,
        { model: db.UserBadge, include: [db.Badge] },
        db.Friend],
    }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // POST - /api/user  by req.body  (assuming a current copy with all user parms is sent)
  //   plantsController.createUser -> Sequelize create
  createUser: function (req, res) {
    console.log("in createUser");
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // PUT - /api/user/:id  by req.params.id  also needs req.body  (current copy with all user parms is sent each time)
  //   plantsController.updateUserById -> Sequelize findOneAndUpdate
  updateUserById: function (req, res) {
    console.log("in updateUserById");
    db.User
      .update(req.body, { where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // DELETE - /api/user/:id  by req.params.id
  //   plantsController.deleteUser -> Sequelize destroy
  deleteUser: function (req, res) {
    console.log("in deleteUser");
    db.User
      .destory({ id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // // GET - /api/plant/:userId  by req.params.userId
  // //   plantsController.findUserById -> Sequelize find
  findPlantsByUser: function (req, res) {
    console.log(req.params)
    db.UserPlant.findAll({
      where: {
        userId: req.params.userId
      },
    }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // POST - /api/plant/  by req.body 
  //   plantsController.createUserPlant -> Sequelize find .then (create)
  createUserPlant: function (req, res) {
    console.log("in createUserPlant");
    //extract req.body data
    console.log(req.body);
    let commonName = req.body.commonName;
    let indoorOutdoor = req.body.indoorOutdoor;

    //find common name from USDA table and then write that datat to the UserPLant table
    //  because they told us they own that plant
    db.usda_plant_data_db.findAll({
      where: {
        CommonName: {
          $like: '%' + commonName + '%'
        }
      },
    })
      .then(findDbModel => {
        // console.log("read of usda data", findDbModel[0].dataValues.CommonName, findDbModel.length, findDbModel[0].dataValues.MoistureUse);

        //init moisture need of the plant to default value
        //init index of matched item in plantdb search
        let moistureUseVar = 'medium';
        let foundIndex = '0';
        //if multiple entries, pick the one with a Moisture Level in th DB
        for (let i = 0; i < findDbModel.length; i++) {
          if (findDbModel[i].dataValues.MoistureUse != '') {
            moistureUseVar = findDbModel[i].dataValues.MoistureUse;
            foundIndex = i;
            break;
          }
        }

        db.UserPlant
          .create({
            plantName: findDbModel[foundIndex].dataValues.CommonName,
            wateringInterval: moistureUseVar,
            type: indoorOutdoor,
            UserId: req.body.userId
          })
          .then(createDbModel => res.json(createDbModel))
          .catch(err => res.status(422).json(err));
      })
  },
  // PUT - /api/plant/:plantId/:status?  by req.params.plantId
  //   plantsController.updateUser -> Sequelize findOneAndUpdate
  updateUserPlantById: function (req, res) {

    console.log("plantid", req.params.plantId);
    console.log("status", req.params.status);

    //if no status present, then user just watered their plant
    //   else the user plant status is changing
    if (req.params.status === undefined) {
      db.UserPlant
        .update({ lastWateredDate: (new Date) }, { where: { id: req.params.plantId } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    else {
      db.UserPlant
        .update({ status: req.params.status }, { where: { id: req.params.plantId } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  // DELETE - /api/plant/:plantId  by req.params.plantId
  //   plantsController.deleteUserPlant -> Sequelize destroy
  deleteUserPlant: function (req, res) {
    console.log("inside deleteUserPLant", req.params.plantId);
    db.UserPlant
      .destroy({ where: { id: req.params.plantId } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // GET - get all badges
  findAllBadges: function (req, res) {
    db.Badge.findAll()
      .then(res => {
        console.log("this found all badges!", res)
      })
  },
  // POST - /api/userBadge by req.body
  //   plantsController.createUserPlant -> Sequelize find .then (create)
  addUserBadge: function (req, res) {

    //extract req.body data
    console.log(req.body);
    //get user ID
    //get badge ID to add
    let userId = req.body.userId;
    let badgeId = req.body.badgeId

    db.UserBadge
      .create({
        badgeName: badgeId,
        userId: userId
      })
      .then(createDbModel => res.json(createDbModel))
      .catch(err => res.status(422).json(err));

  }
};
