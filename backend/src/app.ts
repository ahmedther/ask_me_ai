import express, { Request, Response } from "express";
import apiRoutes from "./routes/apiRoutes";
import sseRoutes from "./routes/sseRoutes";
import corsOptions from "./configs/cors";
import sessionConfig from "./configs/session";
import cookieParser from "cookie-parser";
import { REDIS_HOST } from "./configs/env";

const app = express();

app.set("trust proxy", 1);

console.log("[REDISH HOTED HERE:]", REDIS_HOST);

app.use((req, res, next) => {
  console.log(req);
  next();
});
app.use(corsOptions);
app.use(express.json());
app.use(cookieParser());
app.use(sessionConfig);

app.use("/api", apiRoutes);

app.use("/sse", sseRoutes);

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Welcome to the API! Please use appropriate Routes!</h1>");
});

export default app;
