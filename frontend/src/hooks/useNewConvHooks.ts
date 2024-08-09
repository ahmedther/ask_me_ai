import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectConversations } from "../store/conversationSlice";
import { useTranslation } from "react-i18next";

interface NewConvResults {
  t: ReturnType<typeof useTranslation>["t"];
  conversations: ReturnType<typeof selectConversations>;
  scrollableContainerRef: React.RefObject<HTMLDivElement>;
}

export const useNewConvHooks = (): NewConvResults => {
  const { t } = useTranslation();
  const conversations = useSelector(selectConversations);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo({
        top: scrollableContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [conversations]);

  return { t, conversations, scrollableContainerRef };
};
