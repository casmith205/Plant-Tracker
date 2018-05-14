const router = require("express").Router();
const plantsController = require("../controllers/plantsController");

// Handle get for users login and createUser - /api/user
router.route("/api/user")
  .get(plantsController.findUser)
  .post(plantsController.createUser);

//Get user and their plants and badges
router.route("/api/user/:id")
  .get(plantsController.findUserById)
  .put(plantsController.updateUserById)
  .delete(plantsController.deleteUser);
  
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