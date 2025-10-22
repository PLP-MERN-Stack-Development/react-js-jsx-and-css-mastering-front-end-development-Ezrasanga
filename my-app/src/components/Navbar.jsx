import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700'
    }`

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-md mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">TaskMaster</h1>

        {/* Desktop links */}
        <div className="hidden md:flex gap-3 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/tasks" className={linkClass}>Tasks</NavLink>
          <NavLink to="/api" className={linkClass}>API Data</NavLink>
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile links */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/tasks" className={linkClass}>Tasks</NavLink>
          <NavLink to="/api" className={linkClass}>API Data</NavLink>
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      )}
    </nav>
  )
}
