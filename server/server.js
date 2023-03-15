import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import router from "./routes/index.route.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ connection ✅");
  } catch (error) {
    console.log(`📢 not connection ${error}`);
  }
};

app.use(cors({ origin: process.env.Client, credentials: true }));
app.use(express.json());
app.use(cookieParser());

/* routes */
router(app);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server run port ${process.env.PORT}`);
});
