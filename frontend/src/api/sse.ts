import { API_URL } from "../configs/configs";

export const createEventSource = () => {
  const token = localStorage.getItem("jwtToken");
  return new EventSource(`${API_URL}/sse?token=${token}`);
};

export default createEventSource;
