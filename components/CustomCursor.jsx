"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function LargeCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth but fast tracking
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest("button") || target.closest("a")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Outer Sharp Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 90 : 50,
            height: isHovering ? 90 : 50,
            borderColor: isHovering ? "#a855f7" : "#562e66",
            borderWidth: isHovering ? "2px" : "1px",
            opacity: isHovering ? 1 : 0.8,
          }}
          // filter: drop-shadow makes the ring itself glow
          className="rounded-full border-solid filter drop-shadow-[0_0_8px_rgba(86,46,102,0.6)]"
        />
      </motion.div>

      {/* 2. Glowing Core Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div 
          animate={{ 
            scale: isHovering ? 2.5 : 1.2,
          }}
          className="w-3 h-3 rounded-full relative flex items-center justify-center"
          style={{
            // Radial gradient creates the soft light falloff seen in your image
            background: "radial-gradient(circle, #a855f7 0%, #562e66 100%)",
            boxShadow: "0 0 15px 4px rgba(86, 46, 102, 0.6), 0 0 30px 2px rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Optional: Inner white highlight for extra "pop" */}
          <div className="w-1 h-1 bg-white/40 rounded-full blur-[1px]" />
        </motion.div>
      </motion.div>
    </>
  );
}