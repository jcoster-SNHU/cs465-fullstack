const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');
const User = mongoose.model('users');

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    async (username, password, done) => {
        const q = await User
            .findOne({ email: username })
            .exec();

            //uncomment the following line to show results of querey
            // on the console
            // console.log(q);

            if(!q) // If the DB returned no records, the user doesn't exist
            {
                return done(null, false, { message: 'Incorrect Username'});
            }
            if(!q.validPassword(password)) // Validate password
            {
                return done(null, flase, { message: 'Incorrect Password'});
            }
            return done(null, q); // everything is ok, return user object
    }
));