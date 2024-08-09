import { Router } from "express";
import {
  deleteConvController,
  questionController,
  streamController,
} from "../controller/conversationController";

const router = Router();

router.post("/question", questionController);

router.get("/stream", streamController);

router.delete("/delete-conversations", deleteConvController);

export default router;
