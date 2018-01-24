const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: false
  },
  body: {
    type: String,
    trim: true,
    required: false,
    validate: [
      (input) => {
        return input.length <= 200;
      },
      "Must be less then 200 characters"
    ]
  },
  cardImage: { //image URL
    type: String,
    default: false
  },

  isAnonymous: {
    type: Boolean,
    default: false
  },

  postCreated: {
    type: Date,
    default: Date.now
  },
  likeTotal: {
    type: Number,
    required: false
  },
  commentTotal: {
    type: Number,
    required: false
  },
  clickTotal: { //image URL
    type: String,
    default: false
  },

  // This allows the Post object to create an association to the Comment object

  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }

});


// export const Post
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;