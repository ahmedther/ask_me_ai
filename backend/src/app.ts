import express from "express";
import apiRoutes from "./routes/questionRoutes";
import corsOptions from "./configs/cors";
import sessionConfig from "./configs/session";
import cookieParser from "cookie-parser";

const app = express();

app.use(corsOptions);
app.use(express.json());

app.use(sessionConfig);
app.use(cookieParser());

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Welcome to the API! Please use appropriate Routes!</h1>");
});

app.use("/api", apiRoutes);

export default app;
