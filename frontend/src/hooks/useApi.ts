import axios from "axios";
import { API_URL } from "../configs/configs";
import { useDispatch } from "react-redux";
import {
  updateAnswer,
  updateResponsePending,
} from "../store/conversationSlice";
import { useCallback } from "react";

const useApi = () => {
  const dispatch = useDispatch();

  const reqAnswer = useCallback(
    async (id: string, question: string) => {
      const eventSource = new EventSource(`${API_URL}/sse`, {
        withCredentials: true,
      });

      eventSource.onopen = async () => {
        await axios.post(
          `${API_URL}/api/question`,
          { content: question },
          { withCredentials: true }
        );
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
