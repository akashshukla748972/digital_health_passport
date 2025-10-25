import http from "http";
import { gv } from "./config/global_variable.js";
import app from "./src/app.js";
import { connectDB } from "./config/db.js";

const PORT = gv.port || 5000;
const server = http.createServer(app);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
