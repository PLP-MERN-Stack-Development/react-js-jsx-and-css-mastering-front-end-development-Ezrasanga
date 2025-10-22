import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mb-4 transition-transform"
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </motion.div>
  )
}
