"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import animationData from "@/assets/sm_loader.json";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Allow animation to play smoothly while unlocking page interactivity
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 950);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
    
    // Fallback timer
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F1F2EE] overflow-hidden"
          >{/* Subtle dot grid */}

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-6 relative z-10"
            >
              <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-md md:h-36 md:w-36">
                <Lottie animationData={animationData} loop={true} className="w-20 h-20 md:w-24 md:h-24" />
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/img/logos/sm_logo_text.svg"
                  alt="Socratic Metric"
                  width={200}
                  height={50}
                  className="w-44 md:w-56 h-auto opacity-90"
                  priority
                />
                
                {/* Loading Progress Bar */}
                <div className="w-32 h-1 bg-slate-200/60 rounded-full overflow-hidden mt-2">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#1E4E8A] to-[#2663A5] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
