const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");
const authController = require("../../controllers/authController");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

//Get user and their plants and badges
router.route("/api/user/:id")
  .get(plantsController.findUserById);

// Handle get for users login and createUser - /api/user
router.route("/api/login")
  .post(
    passport.authenticate("local"),
    authController.userLogin
  )

// Handle get for users login and createUser - /api/user
router.route("/api/signup")
  .post(authController.userSignUp);

//Get user and their plants and badges
router.route("/api/user/:id")
  .get(plantsController.findUserById);

//Handle get, put, and delete for a particular plant that a user owns
router.route("/api/plant/:plantId?/:status?")
  .post(plantsController.createUserPlant)
  .put(plantsController.updateUserPlantById)
  .delete(plantsController.deleteUserPlant);

// Handle post for badge 
router.route("/api/userBadge")
  .post(plantsController.addUserBadge);

//route to get all plants related to user 
router.route ("/api/findplant/:userId")
.get(plantsController.findPlantsByUser)

module.exports = router;
