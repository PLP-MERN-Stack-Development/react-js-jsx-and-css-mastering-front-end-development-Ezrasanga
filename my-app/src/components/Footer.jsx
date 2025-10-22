// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-6 text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} TaskMaster App — All rights reserved.
    </footer>
  )
}
