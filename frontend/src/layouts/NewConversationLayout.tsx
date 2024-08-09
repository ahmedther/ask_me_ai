import Footer from "../components/Footer";
import TextArea from "../components/TextArea";
import NewConvHero from "../components/NewConvHero";
import { AnimatePresence } from "framer-motion";
import ChatConversation from "../components/ChatConversation";

import {
  MainContainer,
  Anchor,
  BottomContainer,
  BottomLayout,
  Disclaimer,
  ScrollableContainer,
  ScrollableInnerContainer,
} from "../styles/newConvPage/NewConversationLayoutStyle";
import { useNewConvHooks } from "../hooks/useNewConvHooks";

export default function NewConversationLayout() {
  const { t, conversations, scrollableContainerRef } = useNewConvHooks();

  return (
    <MainContainer>
      <AnimatePresence>
        {conversations.length === 0 ? (
          <NewConvHero />
        ) : (
          <ScrollableContainer ref={scrollableContainerRef}>
            <ScrollableInnerContainer>
              {conversations.map((conversation, index) => {
                return (
                  <ChatConversation
                    key={conversation.id}
                    conversation={conversation}
                    isLast={index === conversations.length - 1}
                  />
                );
              })}
            </ScrollableInnerContainer>
          </ScrollableContainer>
        )}
      </AnimatePresence>
      <BottomContainer>
        <BottomLayout>
          <Disclaimer>
            {t("disclaimer")} <Anchor href="/">{t("terms")}</Anchor>
          </Disclaimer>
          <TextArea />
        </BottomLayout>
        <Footer text={t("footer")} />
      </BottomContainer>
    </MainContainer>
  );
}
