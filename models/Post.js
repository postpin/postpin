const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: false
  },
  imageID: { //image URL
    type: String,
    default: false
  },
  image: { //image URL
    type: String,
    default: false
  },
  postCreated: {
    type: Date,
    default: Date.now
  },
  commentTotal: {
    type: Number,
    required: false
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