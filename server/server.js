import http from "http";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { gv } from "./src/config/global_variable.js";

const PORT = gv.port || 5000;
const server = http.createServer(app);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
