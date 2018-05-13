const router = require("express").Router();
// REQUIRE API ROUTES
const plantRoutes = require("./plants");

// Plant routes
router.use("/plants", plantRoutes);

module.exports = router;
