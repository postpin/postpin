const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: null
  },
  body: {
    type: String,
    trim: true,
    required: null,
    validate: [
      (input) => {
        return input.length <= 200;
      },
      "Must be less then 200 characters"
    ]
  },
  cardImage: { //image URL
    type: String,
    default: null
  },

  isAnonymous: {
    type: Boolean,
    default: false
  },

  postCreated: {
    type: Date,
    default: Date.now
  },

  // This allows the Post object to create an association to the Metric object
  metric: {
    type: Schema.Types.ObjectId,
    ref: "Metric"
  },

  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }

});


// export const Post
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;