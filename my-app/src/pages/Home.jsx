
import React from 'react'
import Button from '@/components/Button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Welcome to TaskMaster
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Manage tasks efficiently, explore live data, and enjoy a beautiful UI.
      </p>
      <Link to="/tasks">
        <Button variant="primary">Get Started</Button>
      </Link>
    </div>
  )
}
