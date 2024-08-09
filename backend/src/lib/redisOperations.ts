import redisClient from "../configs/redis";

export enum Role {
  User = "user",
  Assistant = "assistant",
}

// Define the interface
interface Conversation {
  sessionID: string;
  role: Role;
  content: string;
}

export const getOrSetConversations = async (
  sessionID: string,
  role: Role,
  content: string
): Promise<Conversation[]> => {
  const conversations = await redisClient.get(sessionID);
  const messages = conversations ? JSON.parse(conversations) : [];

  messages.push({ role, content });

  messages.length > 10 && messages.splice(0, messages.length - 10);

  await redisClient.setex(sessionID, 3600, JSON.stringify(messages));

  return messages;
};

export const deleteConversations = (sessionID: string) => {
  redisClient.del(sessionID);
};
