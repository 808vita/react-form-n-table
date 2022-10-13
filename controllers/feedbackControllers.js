const Feedback = require("../models/feedbackModel");

// const mongoose = require("mongoose")

// get all feedbacks data in a array
// need to change _.id as "key" to direclty use with frontend table

const getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });

  res.status(200).json(feedbacks);
};

module.exports = {
  getFeedbacks,
};
