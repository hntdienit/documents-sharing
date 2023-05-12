import passport from "passport";
import { Strategy } from "passport-google-oauth2";
import sequelize from "../config/db.js";
import { Op } from "sequelize";

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
      clientID: "172771080770-2t62dfoprtg9nlm5ce67u8qiit6jj08b.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: `http://localhost:3200/auth/callback`,
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        /* check whether this current database */
        const user = await Users.findOne({
          where: { Ma_google: profile.id },
          where: {
            [Op.or]: [
              {
                Ma_google: profile.id,
              },
              {
                Email: profile.email,
              },
            ],
          },
        });

        if (user) {
          if (!user.Ma_google) {
            const updateUser = await Users.update(
              {
                Ho_ten: profile.given_name,
                Hinh_dai_dien: profile.picture,
                Ma_google: profile.id,
                Xac_thuc_mail: 1,
              },
              {
                where: {
                  Email: profile.email,
                },
              }
            );
          }
          return done(null, user);
        }
        /* if new account */
        const newUser = await Users.create({
          Email: profile.email,
          Ho_ten: profile.given_name,
          Hinh_dai_dien: profile.picture,
          Ma_google: profile.id,
          Xac_thuc_mail: 1,
        });

        return done(null, newUser);
      } catch (err) {
        done(err, false);
      }
    }
  )
);
