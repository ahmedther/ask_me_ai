import { Router } from "express";
import {
  deleteConvController,
  questionController,
} from "../controller/conversationController";

const router = Router();

router.post("/question", questionController);

router.delete("/delete-conversations", deleteConvController);

export default router;
