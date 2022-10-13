const express = require("express");
const {
  getFeedbacks,
  postFeedback,
  deleteFeedback,
} = require("../controllers/feedbackControllers");
const router = express.Router();

//get all feedbacks
router.get("/", getFeedbacks);

//post a new feedback
//needs validations
// for email , phone & restrict mcq options to pre defined ones

router.get("/", postFeedback);

// delete a feedback
router.delete("/", deleteFeedback);

module.exports = router;
