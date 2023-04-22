import express from "express";
import { paymentMethodAll } from "../controllers/paymentmethod.controller.js";
import validator from "../utils/validate.js";

import { verifyToken, checkUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/:useid").get(paymentMethodAll);

export default router;
