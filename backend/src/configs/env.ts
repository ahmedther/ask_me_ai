import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 8000;

const HOST = process.env.HOST || "0.0.0.0";

const OPENAI_KEY = process.env.OPENAI_KEY;

const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;

const REDIS_HOST = process.env.REDIS_HOST || "0.0.0.0";

const REACT_CLIENT_URL =
  process.env.REACT_CLIENT_URL || "http://localhost:3001";

const SECRET =
  process.env.SECRET ||
  "WWAL_AR-RAHMAAN_AR-RAHEEM_AL-JABBAR_AL-GHAFFAR_AL-QAHHAR_AL-QADIR_AS-SAMAD_AL-AFUWW_AL-MUSAWWIR_AL-AAKHIR";

const CHAT_PARAMETERS = process.env.CHAT_PARAMETERS || "";

export {
  PORT,
  OPENAI_KEY,
  HOST,
  REDIS_PORT,
  REDIS_HOST,
  SECRET,
  REACT_CLIENT_URL,
  CHAT_PARAMETERS,
};
