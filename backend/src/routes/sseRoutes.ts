import { Router } from "express";
import { streamController } from "../controller/conversationController";

const router = Router();

router.get("/", streamController);

export default router;
