const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    countryCode: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    rateBeverage: {
      type: String,
      required: true,
    },
    rateClean: {
      type: String,
      required: true,
    },
    rateExp: {
      type: String,
      required: true,
    },
    rateService: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
