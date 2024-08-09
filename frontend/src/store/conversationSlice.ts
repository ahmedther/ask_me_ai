import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface ConversationType {
  id: string;
  question: string;
  answer?: string;
  isResponcePending: boolean;
}

const initialState: ConversationType[] = [];

const conversationSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addQuestion: {
      reducer: (state, action: PayloadAction<ConversationType>) => {
        state.push(action.payload);
        return state;
      },
      prepare: (question: string) => {
        return {
          payload: {
            id: nanoid(),
            question,
            answer: undefined,
            isResponcePending: true,
          },
        };
      },
    },
    updateAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const conversation = state.find((conv) => conv.id === id);
      if (conversation == undefined) return;
      conversation.answer === undefined
        ? (conversation.answer = answer)
        : (conversation.answer += answer);
    },
    updateResponsePending: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const conversation = state.find((conv) => conv.id === id);
      if (conversation) {
        conversation.isResponcePending = false;
      }
    },

    resetState: () => initialState,
  },
});

export const { addQuestion, updateAnswer, updateResponsePending, resetState } =
  conversationSlice.actions;

export default conversationSlice.reducer;

export const selectConversations = (state: {
  conversations: ConversationType[];
}) => state.conversations;

export const selectPendingResponce = createSelector(
  [selectConversations],
  (conversations) =>
    conversations.some(
      (conversation) => conversation.isResponcePending === true
    )
);

export const selectPendingResponseId = createSelector(
  [selectConversations],
  (conversations) =>
    conversations.find(
      (conversation) => conversation.isResponcePending === true
    )?.id
);
