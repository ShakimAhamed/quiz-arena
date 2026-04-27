# 🎮 Quiz Arena

A modern full-stack quiz application with authentication, real-time scoring, and interactive gameplay built using React, TypeScript, Node.js, and MongoDB.

---

<!-- ## 🚀 Live Demo -->

<!-- https://your-live-link.com -->

---

## 📸 Preview

| Login                               | Quiz                              | Dashboard                                   |
| ----------------------------------- | --------------------------------- | ------------------------------------------- |
| ![login](./client/public/login.PNG) | ![quiz](./client/public/quiz.PNG) | ![dashboard](./client/public/dashboard.PNG) |

---

## 🧠 About the Project

Quiz Arena is a gamified quiz platform where users can:

- Sign up and log in securely
- Play interactive timed quizzes
- Track score and streak performance
- View results in a dashboard

The project focuses on **clean architecture, performance, and smooth UI experience**.

---

## ⚙️ Tech Stack

### Frontend

- React (TypeScript)
- Vite
- Tailwind CSS
- Framer Motion
- Axios

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt

---

## ✨ Features

### 🔐 Authentication

- User signup & login
- Secure password hashing (bcrypt)
- JWT authentication
- Protected routes

### 🎮 Quiz System

- Dynamic quiz questions
- Timer-based gameplay
- Score + streak system
- Game phases (Start → Play → Result)

### 📊 Dashboard

- User score tracking
- Game history
- Clean responsive UI

### 🎨 UI/UX

- Responsive design (mobile + desktop)
- Smooth animations using Framer Motion
- Clean Tailwind UI
- Game-like experience

---

## 🏗️ Project Structure

```bash
Quiz-Arena/
│
├── client/ # Frontend (React)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ └── ...
│
├── server/ # Backend (Node.js)
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ └── server.js
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/quiz-arena.git
cd quiz-arena
```

### 2️⃣ Install dependencies

📦 Backend

```bash
cd server
npm install
```

📦 Frontend

```bash
cd client
npm install
```

### 3️⃣ Setup Environment Variables

### Create .env file in /server:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4️⃣ Run the app

From root:

```bash
npm run dev
```

## 👨‍💻 Author

**Shakim Ahamed**

Software Engineer

GitHub: https://github.com/ShakimAhamed

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
