'use client'

import { motion } from 'framer-motion'

export function Logo() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="w-16 h-16 flex items-center justify-center"
    >
      <span className="text-[#64ffda] text-5xl font-bold">C</span>
    </motion.div>
  )
}

