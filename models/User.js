const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  userName: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  profilePhoto: { //image URL
    type: String,
    default: "https://media.giphy.com/media/l0ExqCt2fIDQBK7MA/giphy.gif"
  },
  userCreated: {
    type: Date,
    default: Date.now
  },


  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }

});

// Compare the passed password with the vlue in the database
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

// Pre-hook that will hash the password prior to saving it
UserSchema.pre('save', function saveHook(next) {
  const user = this;
  // Proceed further only if the password is hashed or the user is new
  if (!user.isModified('password')) {
    return next();
  }

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }

    return bcrypt.hash(user.password, salt, (hasError, hash) => {
      // replace password string with the hashed password
      user.password = hash;

      return next();
    });
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;