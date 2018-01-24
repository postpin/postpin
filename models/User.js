const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name is required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "First name is required"
  },
  userName: {
    type: String,
    trim: true,
    required: "User name is required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
    validate: [
      (input) => {
        return input.length >= 8;
      },
      "Password must have 8 characters or more"
    ]
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  profilePhoto: { //image URL
    type: String,
    default: false
  },
  // This allows the User object to create an association to the Post object
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
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