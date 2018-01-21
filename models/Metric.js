const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MetricSchema = new Schema({
  //how to track date
  likeTotal: {
    type: Number,
    required: null
  },
  commentTotal: {
    type: Number,
    required: null
  },
  clickTotal: { //image URL
    type: String,
    default: null
  }

});


// export const Metric
const Metric = mongoose.model("Metric", MetricSchema);
module.exports = Metric;