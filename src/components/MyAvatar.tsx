"use client";

import { Avatar } from "@nextui-org/avatar";
import { motion } from "framer-motion";

export default function MyAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className=" flex w-full place-content-center place-items-center gap-4 pt-4"
    >
      <Avatar src="https://github.com/shallow90125.png" />
      <div className=" text-2xl">shallow90125</div>
    </motion.div>
  );
}
