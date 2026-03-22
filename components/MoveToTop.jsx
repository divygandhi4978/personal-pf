"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function BottomCTA() {

  const [show, setShow] = useState(true);
  const popupRef = useRef(null);

  // Close on outside click
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-8 left-1/2 z-[999] px-4 w-fit"
        >

          <div
            ref={popupRef}
            className="
              group flex items-center
              bg-black/80 backdrop-blur-xl
              border border-white/10
              rounded-full
              shadow-[0_20px_50px_rgba(0,0,0,0.5)]
              hover:border-[#562e66]/50
              transition-all duration-500
            "
          >

            {/* Main Interactive Area */}
            <Link
              href="/#Contact"
              onClick={() => setShow(false)}
              className="flex items-center gap-4 pl-6 py-4 pr-2"
            >

              {/* Pulse Indicator */}
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#562e66] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#562e66]"></span>
              </div>

              {/* Text */}
              <div className="flex items-center gap-2 whitespace-nowrap">

                <span className="
                  text-sm md:text-base
                  text-white
                  group-hover:text-white
                  transition-colors
                  font-medium
                  tracking-tight
                ">
                  Let’s connect
                </span>

                {/* <span className="
                  text-sm md:text-base
                  text-[#562e66]
                  font-bold
                  uppercase
                  tracking-wider
                  group-hover:translate-x-1
                  transition-transform duration-300
                ">
                  Start
                </span> */}

              </div>

            </Link>

            {/* Divider */}
            <div className="w-[1px] h-5 bg-white/10 mx-2" />

            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              aria-label="Dismiss"
              className="
                pr-6 pl-3 py-4
                text-zinc-500 hover:text-white
                transition-colors
                flex items-center justify-center
              "
            >

              <svg
                viewBox="0 0 15 15"
                fill="none"
                className="w-4 h-4"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>

            </button>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}