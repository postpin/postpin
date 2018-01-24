const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  //how to track date
  body: {
    type: String,
    required: false
  },
  commentCreated: {
    type: Date,
    default: Date.now
  }

});


// export const Comment
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;