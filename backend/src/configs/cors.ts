import cors from "cors";
import { REACT_CLIENT_URL } from "./env";

const corsOptions = {
  origin: REACT_CLIENT_URL, // Your React app's URL
  credentials: true, // Enable sending cookies
};

export default cors(corsOptions);
