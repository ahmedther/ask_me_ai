import jwt from "jsonwebtoken";
import { SECRET } from "../configs/env";

interface JwtPayload {
  sessionId: string;
}

export const generateToken = (sessionId: string): string => {
  return jwt.sign({ sessionId }, SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string): string | null => {
  try {
    const decoded = jwt.verify(token, SECRET) as JwtPayload;
    return decoded.sessionId;
  } catch (error) {
    return null;
  }
};
