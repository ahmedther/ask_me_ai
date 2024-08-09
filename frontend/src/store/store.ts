import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "./conversationSlice";

const store = configureStore({
  reducer: {
    conversations: conversationReducer,
  },
});

export default store;
