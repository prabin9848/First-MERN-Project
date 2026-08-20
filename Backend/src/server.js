import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path, { dirname } from "path";

import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config({ path: "./src/.env" });

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
  {
    origin: "http://localhost:5173/";
  }
}
app.use(express.json()); //thsi middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// our simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req methos is ${req.method} & Req URL is ${req.url}`)
//     next();
// })

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
  });
});
