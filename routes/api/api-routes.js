const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");
const authController = require("../../controllers/authController");

// Handle get for users login and createUser - /api/user
router.route("/api/login")
  .post(authController.userLogin)

// Handle get for users login and createUser - /api/user
router.route("/api/signup")
  .post(authController.userSignUp);


//Get user and their plants and badges
// router.route("/api/user/:id")
//   .get(authController.findUserById)
//   .put(authController.updateUserById)
//   .delete(authController.deleteUser);
  
//Handle get, put, and delete for a particular article - could also call just .route("/:id")
router.route("/api/plant/:plantId?/:status?")
  // .get(plantsController.findPlantById)
  .post(plantsController.createUserPlant)
  .put(plantsController.updateUserPlantById)
  .delete(plantsController.deleteUserPlant);

  // Handle post for badge 
router.route("/api/userBadge")
.post(plantsController.addUserBadge);

module.exports = router;
