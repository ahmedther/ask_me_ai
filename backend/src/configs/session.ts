import session from "express-session";
import RedisStore from "connect-redis";
import redisClient from "./redis";
import { SECRET } from "./env";

const sessionConfig = session({
  store: new RedisStore({ client: redisClient }),
  secret: SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  },
});

export default sessionConfig;
