import express from "express";
import apiRoutes from "./routes/apiRoutes";
import sseRoutes from "./routes/sseRoutes";
import corsOptions from "./configs/cors";
import jwtMiddleware from "./middlewares/jwtmiddleware";

const app = express();

app.set("trust proxy", 1);

app.use(corsOptions);

app.use(jwtMiddleware);

app.use(express.json());

app.use("/api", apiRoutes);

app.use("/sse", sseRoutes);

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Welcome to the API! Please use appropriate Routes!</h1>");
});

export default app;
