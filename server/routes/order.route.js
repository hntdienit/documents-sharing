import express from "express";
import {
  getAllOrder,
  getUserOrder,
  postCheckout,
  createvnpay,
  vnpay_ipn,
  vnpay_return,
} from "../controllers/order.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/all").get(verifyToken, getAllOrder);
router.route("/userorder").get(verifyToken, getUserOrder);

router.route("/checkout").post(verifyToken, postCheckout);

router.route("/create_payment_url").post(verifyToken, createvnpay);
router.route("/vnpay_ipn").get(vnpay_ipn);
router.route("/vnpay_return").get(vnpay_return);

export default router;
