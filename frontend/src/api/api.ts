import axios from "axios";
import { API_URL } from "../configs/configs";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// Response interceptor to update the token
api.interceptors.response.use(
  (response) => {
    const token = response.headers.authorization;
    if (token) {
      localStorage.setItem("jwtToken", token);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const postQuestion = async (question: string) => {
  const response = await api.post("/api/question", { content: question });
  return response.data;
};

export const deleteConversation = async () => {
  await api.delete("/api/delete-conversations");
  localStorage.removeItem("jwtToken");
  return { data: null };
};
