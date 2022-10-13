const express = require("express");
const { getFeedbacks } = require("../controllers/feedbackControllers");
const router = express.Router();

router.get("/", getFeedbacks);

module.exports = router;
