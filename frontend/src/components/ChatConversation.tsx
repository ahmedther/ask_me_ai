/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import avatarImage from "../assets/images/boy.png";
import { ConversationType } from "../store/conversationSlice";
import { AvatarImage } from "../styles/sideNavigationBar/sideNavStyles";

import {
  ChatBubbleContainer,
  ChatBubble,
  AiResponseContainer,
} from "../styles/newConvPage/NewConversationLayoutStyle";
import MarkdownRenderer from "./MarkdownRenderer";
import Spinner from "../ui/Spinner";
import useSpeechSynthesis from "../hooks/useSpeechSynthesis";

interface ConversationItemProps {
  conversation: ConversationType; // Type for the conversation prop
  isLast?: boolean; // Prop to check if the conversation is the last one in the list
}

const ChatConversation: React.FC<ConversationItemProps> = ({
  conversation,
  isLast,
}) => {
  isLast &&
    useSpeechSynthesis(conversation.answer, conversation.isResponcePending);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ChatBubbleContainer>
        <ChatBubble>{conversation.question}</ChatBubble>
        <AvatarImage src={avatarImage} />
      </ChatBubbleContainer>

      <AiResponseContainer>
        <MarkdownRenderer content={conversation.answer} />
      </AiResponseContainer>
      {conversation.isResponcePending && <Spinner />}
    </motion.div>
  );
};

export default ChatConversation;
