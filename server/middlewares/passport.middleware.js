import passport from "passport";
import { Strategy } from "passport-google-oauth2";

import Users from "../models/User.model.js";

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: "1071212768241-s8easkgerd64m0aqljeif5t6j43s2r0a.apps.googleusercontent.com",
      clientSecret: "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",

      //   clientID: "77314108918-0l4bq1rpr6gkm4a9fe211ii7r2t18n9p.apps.googleusercontent.com",
      //   clientSecret: "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",
      callbackURL: `http://localhost:3200/auth/callback`,
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        /* check whether this current database */

        // const user = await Users.findOne({
        //   where: {
        //     authGoogle: profile.id,
        //     //   authType: "google",
        //   },
        // });

        console.log(profile);
        // if (user) return done(null, user);
        // /* if new account */
        // const newUser = new Users({
        //   firstName: profile.name.givenName,
        //   lastName: profile.name.familyName,
        //   email: profile.email,
        //   authGoogle: profile.id,
        // });

        // await newUser.save();
        done(null, profile);
      } catch (err) {
        done(err, false);
      }
    }
  )
);
