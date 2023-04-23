import authRoute from "./auth.route.js";
import documentRoute from "./document.route.js";
import subjectRoute from "./subject.route.js";
import reviewRoute from "./review.route.js";
import userRoute from "./user.route.js";
import cartRoute from "./cart.route.js";
import orderRoute from "./order.route.js";
import paymentmethodRoute from "./paymentmethod.route.js";
import majorRoute from "./major.route.js";
import wishlistRoute from "./wishlist.route.js";
import conversationRoute from "./conversation.route.js";
import messagesRoute from "./message.route.js";

import createError from "../utils/createError.js";

const router = (app) => {
  app.get("/", (req, res, next) => {
    return res.status(200).json({
      message: "server run ok!",
    });
  });

  app.use("/auth", authRoute);
  app.use("/document", documentRoute);
  app.use("/subject", subjectRoute);
  app.use("/review", reviewRoute);
  app.use("/user", userRoute);
  app.use("/cart", cartRoute);
  app.use("/order", orderRoute);
  app.use("/paymentmethod", paymentmethodRoute);
  app.use("/major", majorRoute);
  app.use("/wishlist", wishlistRoute);
  app.use("/conversation", conversationRoute);
  app.use("/messages", messagesRoute);

  app.use("/:error", (req, res, next) => {
    return next(createError(404, "Không tìm thấy đường dẫn mong muốn!"));
  });

  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Đã có lỗi xảy ra!";
    return res.status(errorStatus).json({ error: errorMessage });
  });
};

export default router;
