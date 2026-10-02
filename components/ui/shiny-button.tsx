"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 } as object,
  animate: { "--x": "-100%", scale: 1 } as object,
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  href,
  target,
  rel,
  onClick,
}) => {
  const inner = (
    <>
      <span
        className="relative block size-full text-sm font-bold uppercase tracking-widest"
        style={{
          maskImage:
            "linear-gradient(-75deg, hsl(var(--shine)) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), hsl(var(--shine)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--shine)/15%)_calc(var(--x)+20%),hsl(var(--shine)/60%)_calc(var(--x)+25%),hsl(var(--shine)/15%)_calc(var(--x)+100%))] p-px"
      />
    </>
  );

  const baseClass = cn(
    "relative rounded-full font-medium shadow-lg shadow-green-900/20 backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:brightness-110",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        {...(animationProps as any)}
        className={baseClass}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      {...(animationProps as any)}
      className={baseClass}
    >
      {inner}
    </motion.button>
  );
};

export default ShinyButton;
