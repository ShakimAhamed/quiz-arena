import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import quizRoutes from "./routes/quiz.js";
import dns from "node:dns/promises";
dotenv.config();
import path from "path";

dotenv.config({ path: path.resolve("./server/.env") });

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("MongoDB error ❌", err));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
  //console.log(process.env.MONGO_URI);
});