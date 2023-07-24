import express from "express";
import { paymentMethodAll } from "../controllers/paymentmethod.controller.js";

const router = express.Router();

router.route("/:useid").get(paymentMethodAll);

export default router;
