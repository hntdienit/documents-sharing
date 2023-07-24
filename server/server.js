import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import sequelize from "./config/db.js";
import relationship from "./models/relationship.model.js";
import router from "./routes/index.route.js";

import passport from "passport";
import cookieSession from "cookie-session";

const app = express();
dotenv.config();

try {
  await sequelize.authenticate();
  relationship();
  await sequelize.sync();
  console.log("✅ Database connection successful...");
} catch (error) {
  console.error("❌ Database connection failed...", error);
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use(express.static("public"));

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);

app.use((req, res, next) => {
  if (req.session && !req.session.regenerate) {
    req.session.regenerate = (cb) => {
      cb();
    };
  }
  if (req.session && !req.session.save) {
    req.session.save = (cb) => {
      cb();
    };
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());

router(app);

app.listen(process.env.PORT, () => {
  console.log(`✅ server runing on http://localhost:${process.env.PORT}`);
});
