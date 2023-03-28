const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.post("/createProfile", profileController.createProfile);
router.get("/getProfile/:id", profileController.getProfile);

module.exports = router;