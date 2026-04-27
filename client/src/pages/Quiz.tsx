import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Screen from "../components/Screen";
import TimerBar from "../components/TimerBar";
import QuestionCard from "../components/QuestionCard";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

export default function lQuiz() {
  const [phase, setPhase] = useState<"start" | "play" | "end">("start");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const [selected, setSelected] = useState<string | null>(null);
  const [time, setTime] = useState(10);

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz/questions")
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

  useEffect(() => {
    if (phase !== "play") return;

    if (time === 0){
        next();
        return; 
    } 

    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time, phase]);

  const current = questions[index];

  const select = (opt: string) => {
    if (selected) return;

    setSelected(opt);

    if (opt === current.answer) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
  };

  const next = async () => {
    setSelected(null);
    setTime(10);

    const nextIndex = index + 1;

    if (nextIndex < questions.length) {
      setIndex(nextIndex);
    } else {
      await fetch("http://localhost:5000/api/quiz/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          score,
        }),
      });

      setPhase("end");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <AnimatePresence mode="wait">
        {phase === "start" && (
          <Screen>
            <h1 className="text-3xl mb-6">🎮 Quiz Arena</h1>

            <button
              className="bg-blue-500 px-6 py-3 rounded"
              onClick={() => setPhase("play")}
            >
              Start Game
            </button>
          </Screen>
        )}

        {phase === "play" && current && (
          <Screen>
            <div className="flex justify-between mb-2 text-sm">
              <span>Score: {score}</span>
              <span>🔥 Streak: {streak}</span>
            </div>

            <TimerBar time={time} />

            <QuestionCard
              q={current}
              selected={selected}
              onSelect={select}
            />

            {selected && (
              <button
                onClick={next}
                className="mt-4 bg-purple-500 px-4 py-2 rounded w-full"
              >
                Next →
              </button>
            )}
          </Screen>
        )}

        {phase === "end" && (
          <Screen>
            <h1 className="text-2xl mb-4">🏆 Finished</h1>

            <p>Score: {score}</p>
            <p className="mb-4">Streak: {streak}</p>

            <button
              className="bg-green-500 px-5 py-2 rounded w-full"
              onClick={() => window.location.reload()}
            >
              Play Again
            </button>
          </Screen>
        )}
      </AnimatePresence>
    </div>
  );
}