import Redis from "ioredis";
import { REDIS_PORT, REDIS_HOST } from "./env";

const redisClient = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
});

export default redisClient;
