const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  //how to track date
  body: {
    type: String,
    required: false
  },
  likeTotal: {
    type: Number,
    required: false
  },

  userName: {
    type: String,
    required: false
  },

  commentCreated: {
    type: Date,
    default: Date.now
  },
  _post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

});


// export const Comment
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;