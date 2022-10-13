const express = require("express");
const {
  getFeedbacks,
  postFeedback,
  deleteFeedback,
} = require("../controllers/feedbackControllers");
const router = express.Router();

//get all feedbacks
router.get("/", getFeedbacks);

// delete many feedbacks
router.delete("/delete", deleteFeedback);

//post a new feedback
//needs validations
// for email , phone & restrict mcq options to pre defined ones

router.post("/", postFeedback);

module.exports = router;
