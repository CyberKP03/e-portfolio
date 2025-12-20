"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

const SciFiSnackbar = ({ message, type = "success", onClose }) => {
  // Auto-dismiss after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  // Cyberpunk/Sci-Fi Styles
  // Success: Neon Green/Cyan (Accent)
  // Error: Burgundy/Red
  const bgColor = isSuccess 
    ? "bg-[#0f172a]/90 border-accent" 
    : "bg-[#2a0f0f]/95 border-red-600";
    
  const glow = isSuccess
    ? "shadow-[0_0_15px_rgba(52,211,153,0.3)]"
    : "shadow-[0_0_15px_rgba(220,38,38,0.3)]";

  const textColor = isSuccess ? "text-accent" : "text-red-500";
  const icon = isSuccess ? <FaCheckCircle /> : <FaExclamationTriangle />;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 100, opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 min-w-[320px] max-w-[90vw]`}
    >
      <div 
        className={`relative p-4 pr-10 border-l-4 ${bgColor} ${glow} backdrop-blur-md rounded-r-lg overflow-hidden clip-path-cyber`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)" // Slight angled cut at bottom right
        }}
      >
        {/* Animated Scanline Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full animate-scanline pointer-events-none" />

        <div className="flex items-start gap-3 relative z-10">
          <div className={`mt-1 text-lg ${textColor}`}>
            {icon}
          </div>
          <div className="flex-1">
            <h4 className={`font-mono text-sm uppercase tracking-widest font-bold ${textColor}`}>
              {isSuccess ? "TRANSMISSION COMPLETE" : "SYSTEM ERROR"}
            </h4>
            <p className="text-gray-300 text-sm mt-1 font-sans">
              {message}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors"
        >
          <FaTimes />
        </button>

        {/* Decorative corner accents */}
        <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${isSuccess ? 'border-accent' : 'border-red-500'}`} />
        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${isSuccess ? 'border-accent' : 'border-red-500'}`} />
      </div>
    </motion.div>
  );
};

export default SciFiSnackbar;
