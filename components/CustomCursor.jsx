"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function LargeCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Adjusted for a "snappier" feel so it stays stuck to the mouse pointer
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.getAttribute('role') === 'button'
      ) {
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
      {/* The Outer Ring: High Visibility Purple Aura */}
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
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
            // Keep background very transparent to see text clearly
            backgroundColor: isHovering ? "rgba(86, 46, 102, 0.1)" : "transparent",
            // Thicker, brighter border for visibility
            borderColor: isHovering ? "rgba(168, 85, 247, 0.8)" : "rgba(86, 46, 102, 0.6)",
            borderWidth: isHovering ? "2px" : "1.5px",
          }}
          className="rounded-full border-solid shadow-[0_0_20px_rgba(86,46,102,0.4)]"
        />
      </motion.div>

      {/* The Center Point: Always visible white dot */}
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
            scale: isHovering ? 1.5 : 1,
            backgroundColor: isHovering ? "#fff" : "#562e66" 
          }}
          // Added a small white glow to the dot so it pops against dark sections
          className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_white]" 
        />
      </motion.div>
    </>
  );
}