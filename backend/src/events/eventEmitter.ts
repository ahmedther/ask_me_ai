import { Response } from "express";
import { EventEmitter } from "events";
import { createStream } from "../lib/openai";
import { ChatCompletionMessageParam } from "openai/resources";
import { getOrSetConversations, Role } from "../lib/redisOperations";

const eventEmitter = new EventEmitter().setMaxListeners(20);

export const questionReceivedListener = async (
  messages: Array<ChatCompletionMessageParam>,
  sessionID: string,
  res: Response
) => {
  let fullResponse = "";

  try {
    // const newContent = `Limit the response under 200 words and answer\n\n ${content}`;
    const stream = await createStream(messages);

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";

      if (content) {
        fullResponse += content;
        res.write(`data: ${JSON.stringify(content)}\n\n`);
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.write(`data: ${JSON.stringify({ error: "An error occurred" })}\n\n`);
  }
  
  res.write(`data: ${JSON.stringify({ done: true })}\n\n`);

  getOrSetConversations(sessionID, Role.Assistant, fullResponse);

  res.end();
};

export default eventEmitter;
