import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const login = async () => {
    if (!email || !password) return alert("Fill all fields");

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!data.token) return alert("Invalid credentials");

    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);

    nav("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <input
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-6 bg-gray-800 rounded-lg outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={login}
          className="w-full bg-white text-black p-3 rounded-lg font-semibold"
        >
          Login
        </motion.button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          No account? <a href="/signup" className="text-blue-400">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
}