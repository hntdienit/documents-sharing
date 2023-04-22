import express from "express";
import { createvnpay, vnpay_ipn, vnpay_return } from "../controllers/order.controller.js";
import validator from "../utils/validate.js";

import { verifyToken, checkUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

//  vnpay
router.route("/create_payment_url").post(verifyToken, createvnpay);
router.route("/vnpay_ipn").get(vnpay_ipn);
router.route("/vnpay_return").get(vnpay_return);
//  vnpay

export default router;
