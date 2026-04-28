import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserScore = {
  _id: string;
  email: string;
  scores: number[];
};

export default function Dashboard() {
  const nav = useNavigate();

  const [leaderboard, setLeaderboard] = useState<UserScore[]>([]);
  const [myScore, setMyScore] = useState<number>(0);

  // Load leaderboard
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/quiz/leaderboard`)
      .then((res) => res.json())
      .then(setLeaderboard);
  }, []);

  // Get my best score
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/quiz/leaderboard`)
      .then((res) => res.json())
      .then((users) => {
        const me = users.find((u: UserScore) => u._id === userId);
        if (me && me.scores.length > 0) {
          setMyScore(Math.max(...me.scores));
        }
      });
  }, []);

  const logout = () => {
    localStorage.clear();
    nav(`/login`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">🎮 Quiz Arena Dashboard</h1>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">My Best Score</h2>
          <p className="text-4xl font-bold">{myScore}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">Total Players</h2>
          <p className="text-4xl font-bold">{leaderboard.length}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mb-8">
        <button
          onClick={() => nav(`/quiz`)}
          className="bg-blue-500 px-6 py-3 rounded-lg text-lg"
        >
          🚀 Start Quiz
        </button>
      </div>

      {/* Leaderboard */}
      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-xl mb-4">🏆 Leaderboard</h2>

        <div className="space-y-3">
          {leaderboard
            .sort((a, b) => {
              const maxA = Math.max(...(a.scores || [0]));
              const maxB = Math.max(...(b.scores || [0]));
              return maxB - maxA;
            })
            .map((user) => (
              <div
                key={user._id}
                className="flex justify-between border-b border-gray-700 py-2"
              >
                <span>{user.email}</span>
                <span className="text-green-400 font-bold">
                  {Math.max(...(user.scores || [0]))}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}