"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FullscreenMediaWrapperProps {
  children: React.ReactNode;
  src: string;
  type: "image" | "video";
  className?: string;
}

export function FullscreenMediaWrapper({ children, src, type, className = "" }: FullscreenMediaWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
          onClick={handleClose}
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[10000]"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking media
          >
            {type === "video" ? (
              <video
                src={src}
                autoPlay
                controls
                playsInline
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain outline-none ring-0"
              />
            ) : (
              <img
                src={src}
                alt="Fullscreen view"
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div onClick={handleOpen} className={`cursor-zoom-in ${className}`}>
        {children}
      </div>
      {mounted && typeof document !== "undefined" && createPortal(modalContent, document.body)}
    </>
  );
}
