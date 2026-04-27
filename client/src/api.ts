import type { Question } from "./types";


export const questions: Question[] = [
  {
    id: 1,
    question: "Which hook manages state?",
    options: ["useFetch", "useState", "useData", "useEffect"],
    answer: "useState",
  },
  {
    id: 2,
    question: "TypeScript is?",
    options: ["Library", "Framework", "JS Superset", "Database"],
    answer: "JS Superset",
  },
  {
    id: 3,
    question: "React is maintained by?",
    options: ["Google", "Meta", "Netflix", "Amazon"],
    answer: "Meta",
  },
];