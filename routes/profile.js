const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.post("/createProfile", profileController.createProfile);
router.get("/getProfile/:id", profileController.getProfile);
router.get("/getProfileByUserId/:id", profileController.getProfileByUserId);
router.get("/", profileController.getAllProfiles);

module.exports = router;