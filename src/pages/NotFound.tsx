// src/pages/NotFound.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // home page ga qaytaradi
  };

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center text-green-400 font-mono overflow-hidden relative">
      {/* Animated 404 digits */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="text-[10rem] font-bold tracking-wide select-none"
      >
        404
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-2xl sm:text-3xl mb-6 text-center"
      >
        Oops! Page not found.
      </motion.div>

      {/* Fun description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-green-300 text-sm sm:text-base text-center max-w-md"
      >
        Siz kiritgan URL mavjud emas yoki server uni topa olmadi. 
        <br /> Lekin tashvishlanmang — sizni xavfsiz joyga olib boramiz!
      </motion.p>

      {/* Animated button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
        whileTap={{ scale: 0.9 }}
        onClick={handleBack}
        className="mt-8 px-6 py-3 rounded-lg border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors font-bold"
      >
        Bosh sahifaga qaytish
      </motion.button>

      {/* Floating glitch / matrix effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0.1 }}
            animate={{ y: ["-100%", "100%"], opacity: [0.1, 0.3, 0.1] }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 3,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-16 bg-green-400 rounded-sm"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
