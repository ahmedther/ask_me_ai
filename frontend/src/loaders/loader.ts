import axios from "axios";
import { API_URL } from "../configs/configs";

export const startNewConv = () => {
  axios.delete(`${API_URL}/api/delete-conversations`, {
    withCredentials: true,
  });

  return { data: null };
};
