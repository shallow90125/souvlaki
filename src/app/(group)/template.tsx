"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=" mx-auto grid min-h-[calc(100dvh_-_7.5rem)] w-full max-w-screen-lg place-content-stretch place-items-center content-start gap-4 p-4"
    >
      {children}
    </motion.div>
  );
}
