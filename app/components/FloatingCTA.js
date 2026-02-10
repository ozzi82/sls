"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show after scrolling or after 2 seconds
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
    };

    const timer = setTimeout(() => setIsVisible(true), 2000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {isExpanded ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="flex flex-col gap-3 items-end mb-3"
            >
              {/* Enhanced card with glassmorphism */}
              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-5 max-w-xs">
                <button
                  aria-label="Close"
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/20 transition"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                <h3 className="font-bold text-white mb-2 text-lg">Get 48-Hour Quote</h3>
                <p className="text-sm text-neutral-200/90 mb-4">
                  Wholesale pricing and professional drawings delivered fast.
                </p>

                <div className="space-y-2">
                  <Link
                    href="/contact"
                    className="block w-full text-center rounded-xl px-4 py-3 font-semibold text-neutral-900 shadow-lg"
                    style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                    onClick={() => setIsExpanded(false)}
                  >
                    Request Quote
                  </Link>

                  <a
                    href="tel:+16892940912"
                    className="flex items-center justify-center gap-2 w-full text-center rounded-xl px-4 py-3 font-medium border border-white/20 text-white hover:bg-white/10 transition"
                  >
                    <Phone className="w-4 h-4" />
                    Call East: (689) 294-0912
                  </a>

                  <a
                    href="tel:+16512302827"
                    className="flex items-center justify-center gap-2 w-full text-center rounded-xl px-4 py-3 font-medium border border-white/20 text-white hover:bg-white/10 transition"
                  >
                    <Phone className="w-4 h-4" />
                    Call West: (651) 230-2827
                  </a>

                  <Link
                    href="/products"
                    className="block w-full text-center rounded-xl px-4 py-2 font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition text-sm"
                    onClick={() => setIsExpanded(false)}
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(true)}
              className="rounded-full w-16 h-16 shadow-2xl shadow-orange-500/40 flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg,#ffb84d,#ff7a1a)" }}
              aria-label="Open quote options"
            >
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <MessageCircle className="w-7 h-7 text-neutral-900 relative z-10" />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
