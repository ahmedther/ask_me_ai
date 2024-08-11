import { OpenAI } from "openai";
import { CHAT_GPT_MODEL, OPENAI_KEY } from "../configs/env";
import { ChatCompletionMessageParam } from "openai/resources";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
});

export const createStream = async (
  messages: Array<ChatCompletionMessageParam>
) => {
  return openai.beta.chat.completions.stream({
    model: CHAT_GPT_MODEL,
    // model: "gpt-4o",
    messages: messages,
    stream: true,
  });
};

export default openai;

// export const createStream = async (content: string) => {
//   return openai.beta.chat.completions.stream({
//     model: "gpt-3.5-turbo",
//     // model: "gpt-4o",
//     messages: [{ role: "user", content }],
//     stream: true,
//   });
// };
