import express from "express";
import { addProductToCart, getCart, patchProductInCart, deleteProductInCart } from "../controllers/cart.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/add").post(verifyToken, addProductToCart);

router.route("/:id").patch(verifyToken, patchProductInCart).delete(verifyToken, deleteProductInCart);

router.route("/").get(verifyToken, getCart);

export default router;
