const Feedback = require("../models/feedbackModel");
const validator = require("validator");
const mongoose = require("mongoose");

// get all feedbacks data in a array
// need to change _.id as "key" to direclty use with frontend table

const getFeedbacks = async (req, res) => {
  try {
    // const feedbacks = await Feedback.find({}).sort({
    //   createdAt: -1,
    // });

    const feedbacks = await Feedback.aggregate([
      {
        $project: {
          key: "$_id",
          countryCode: "$countryCode",
          customerName: "$customerName",
          email: "$email",
          phone: "$phone",
          rateBeverage: "$rateBeverage",
          rateClean: "$rateClean",
          rateExp: "$rateExp",
          rateService: "$rateService",
        },
      },
    ]);

    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postFeedback = async (req, res) => {
  // need validations for multiple items !
  //email,phone & all mcq
  const {
    countryCode,
    customerName,
    email,
    phone,
    rateBeverage,
    rateClean,
    rateExp,
    rateService,
  } = req.body;

  try {
    if (
      !countryCode ||
      !customerName ||
      !email ||
      !phone ||
      !rateBeverage ||
      !rateClean ||
      !rateExp ||
      !rateService
    ) {
      throw Error("please fill all fields", req.body);
    }
    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }
    if (phone.length > 10 || phone.length < 10) {
      throw Error("Phone number needs to 10 digits");
    }

    const fieldOptions = ["Excellent", "Good", "Fair", "Bad"];
    if (
      !fieldOptions.includes(rateBeverage) ||
      !fieldOptions.includes(rateClean) ||
      !fieldOptions.includes(rateExp) ||
      !fieldOptions.includes(rateService)
    ) {
      throw Error("Requires vaild rating option");
    }

    const feedback = await Feedback.create({
      countryCode,
      customerName,
      email,
      phone,
      rateBeverage,
      rateClean,
      rateExp,
      rateService,
    });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFeedback = async (req, res) => {
  const { deleteItems } = req.body;
  console.log(deleteItems);

  try {
    // if (!itemsArray.length > 0) {
    //   throw Error("please select items");
    //   return;
    // }

    const items = await Feedback.deleteMany({
      _id: { $in: deleteItems },
    });
    res.status(200).json({ items });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFeedbacks,
  postFeedback,
  deleteFeedback,
};
