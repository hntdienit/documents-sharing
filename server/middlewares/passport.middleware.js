import passport from "passport";
import { Strategy } from "passport-google-oauth2";

import Users from "../models/user.model.js";

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      // clientID: "1071212768241-s8easkgerd64m0aqljeif5t6j43s2r0a.apps.googleusercontent.com",
      // clientSecret: "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",

      clientID: "172771080770-2t62dfoprtg9nlm5ce67u8qiit6jj08b.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: `http://localhost:3200/auth/callback`,
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        /* check whether this current database */

        const user = await Users.findOne({
          where: { So_dien_thoai: profile.id },
        });

        if (user) return done(null, user);
        /* if new account */
        const newUser = new Users({
          Email: profile.email,
          Ho_ten: profile.given_name,
          Hinh_dai_dien: profile.picture,
          So_dien_thoai: profile.id,
        });

        await newUser.save();
        return done(null, newUser);
      } catch (err) {
        done(err, false);
      }
    }
  )
);
