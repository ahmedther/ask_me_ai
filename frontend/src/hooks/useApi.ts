import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { postQuestion } from "../api/api";
import { createEventSource } from "../api/sse";

import {
  updateAnswer,
  updateResponsePending,
} from "../store/conversationSlice";

const useApi = () => {
  const dispatch = useDispatch();

  const reqAnswer = useCallback(
    async (id: string, question: string) => {
      const eventSource = createEventSource();

      eventSource.onopen = async () => {
        await postQuestion(question);
      };

      eventSource.onmessage = ({ data }) => {
        if (data === "Connected") {
          console.log(data);
          return;
        }

        if (data !== '{"done":true}') {
          const answer = JSON.parse(data);
          dispatch(updateAnswer({ id, answer }));
          return;
        }

        eventSource.close();
        dispatch(updateResponsePending({ id }));
      };

      eventSource.onerror = (error) => {
        console.error("EventSource failed:", error);
        const answer = `**Oops, Something Went Wrong!** \n\nWe're having some server issues. Can you try again later? We're working to get everything back up and running smoothly.`;

        eventSource.close();
        dispatch(updateAnswer({ id, answer }));
        dispatch(updateResponsePending({ id }));
      };
    },
    [dispatch]
  );

  return {
    reqAnswer,
  };
};

export default useApi;
