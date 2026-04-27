import express from "express";
import { questions } from "../data/questions.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/questions", (req, res) => {
  res.json(questions);
});

router.post("/score", async (req, res) => {
  const { userId, score } = req.body;

  const user = await User.findById(userId);
  user.scores.push(score);
  await user.save();

  res.json(user);
});

router.get("/leaderboard", async (req, res) => {
  const users = await User.find().sort({ scores: -1 }).limit(5);
  res.json(users);
});

export default router;