"use client";

import { motion } from "framer-motion";

export default function MotionHome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <main className=" mx-auto grid min-h-[100dvh] w-full max-w-screen-lg place-content-stretch">
        {children}
      </main>
    </motion.div>
  );
}
