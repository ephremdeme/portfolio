"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProfileOrbit() {
  return (
    <motion.div
      className="relative mx-auto flex h-80 w-80 items-center justify-center from-emerald-500/20 to-cyan-500/20"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ duration: 16, repeat: Infinity }}
    >
      <motion.div
        className="absolute inset-1 rounded-sm border-emerald-400/40"
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <Image
        src="/images/profile.png"
        alt="Ephrem Demelash portrait"
        width={320}
        height={320}
        className="rounded-sm object-cover"
        priority
      />
    </motion.div>
  );
}
