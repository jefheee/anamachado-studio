"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** Direction of entrance: "up" (default) or "left"/"right" */
  direction?: "up" | "left" | "right";
  delay?: number;
  once?: boolean;
  margin?: string;
}

export function ScrollRevealWrapper({
  children,
  className = "",
  direction = "up",
  delay = 0,
  once = true,
  margin = "-100px",
}: ScrollRevealWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  // When user prefers reduced motion, render immediately without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = {
    opacity: 0,
    ...(direction === "up" && { y: 24 }),
    ...(direction === "left" && { x: -24 }),
    ...(direction === "right" && { x: 24 }),
  };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — animates children sequentially.
 * Wrap items with <ScrollRevealItem> inside this.
 */
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Reduced-motion safe variants: no transform, instant opacity */
const staggerContainerReduced: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const staggerItemReduced: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function ScrollRevealStaggerContainer({
  children,
  className = "",
  margin = "-50px",
}: {
  children: React.ReactNode;
  className?: string;
  margin?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? staggerContainerReduced : staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? staggerItemReduced : staggerItemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
