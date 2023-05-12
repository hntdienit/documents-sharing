import express from "express";
import { createConversation, getConversations, getSingleConversation } from "../controllers/conversation.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").get(verifyToken, getConversations).post(verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversation);

export default router;
