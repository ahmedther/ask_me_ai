import app from "./app";
import { PORT, HOST } from "./configs/env";

app.listen(PORT, HOST, () => {
  console.log(`Server running on  http://${HOST}:${PORT}`);
});
