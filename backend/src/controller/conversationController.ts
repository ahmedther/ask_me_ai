import { Request, Response } from "express";
import eventEmitter, { questionReceivedListener } from "../events/eventEmitter";
import { ChatCompletionMessageParam } from "openai/resources";
import {
  deleteConversations,
  getOrSetConversations,
  Role,
} from "../lib/redisOperations";
import { CHAT_PARAMETERS } from "../configs/env";

export const questionController = async (req: Request, res: Response) => {
  const { content: question } = req.body;

  if (question === undefined) {
    res.status(400).json({ message: "Question not Sent" });
    return;
  }

  const content = `${CHAT_PARAMETERS}\n\n${question}`;

  const sessionID = `conversation:${req.sessionID}`;

  const messages = await getOrSetConversations(sessionID, Role.User, content);

  eventEmitter.emit("questionReceived", messages, sessionID); // Emit an event

  res.status(200).json({ message: "Question received" });
};

export const streamController = (req: Request, res: Response) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  res.write("data: Connected\n\n");

  const listener = (
    messages: Array<ChatCompletionMessageParam>,
    sessionID: string
  ) => questionReceivedListener(messages, sessionID, res);

  eventEmitter.on("questionReceived", listener);

  // Remove the listener when the response ends
  res.on("close", () => {
    eventEmitter.removeListener("questionReceived", listener);
  });
};

export const deleteConvController = (req: Request, res: Response) => {
  deleteConversations(`conversation:${req.sessionID}`);
  res.sendStatus(204); // Send a "No Content" status code
};
