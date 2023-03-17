import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import sequelize from "./config/db.js";
import relationship from "./models/relationship.model.js";
import router from "./routes/index.route.js";

const app = express();
dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("✅ connection ✅");
//   } catch (error) {
//     console.log(`📢 not connection ${error}`);
//   }
// };
/* connection Mysql */
try {
  await sequelize.authenticate();
  relationship();
  // await sequelize.sync({ force: true })
  await sequelize.sync();
  console.log("Kết nối mySQL thành công...");
} catch (error) {
  console.error("Kết nối database thất bại...", error);
}

app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.Client, credentials: true }));
app.use(express.json({ extended: true }));
app.use(cookieParser());

app.use(express.static("public"));

/* routes */
router(app);

app.listen(process.env.PORT, () => {
  console.log(`✅ server runing on http://localhost:${process.env.PORT}`);
});
