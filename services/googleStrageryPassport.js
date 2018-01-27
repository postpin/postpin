console.log("object");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},async (accessToken, refreshToken, profile, done) => {
    console.log("hello from google auth");
    const existingUser = await User.findOne({ googleID: profile.id })
    if (existingUser) {
        done(null, existingUser);

    } else {
        const user = await new User({
            userName: profile.id,
            firstName: profile.displayName,
            email: profile.emails[0].value,
            profilePhoto: profile.photos[0].value,
        }).save()
        done(null, user)
    }
}));