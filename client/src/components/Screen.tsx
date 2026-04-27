import { motion } from "framer-motion";

export default function Screen({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      className="bg-gray-900 p-8 rounded-xl w-full max-w-xl text-white"
    >
      {children}
    </motion.div>
  );
}