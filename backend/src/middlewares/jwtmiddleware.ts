import { NextFunction, Request, Response } from "express";
import { generateToken, verifyToken } from "../utils/jwtUtils";
import { v4 as uuidv4 } from "uuid";

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let token =
    req.headers.authorization?.split(" ")[1] || (req.query.token as string);

  if (!token) {
    const sessionId = uuidv4();
    token = generateToken(sessionId);
    res.setHeader("Authorization", `Bearer ${token}`);
  }
  const sessionId = verifyToken(token);

  if (sessionId) {
    req.sessionID = sessionId;
  }

  next();
};

export default jwtMiddleware;
