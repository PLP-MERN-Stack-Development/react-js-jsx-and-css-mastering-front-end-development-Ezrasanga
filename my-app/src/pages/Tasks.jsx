// src/pages/Tasks.jsx
import React, { useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = () => {
    if (input.trim() === '') return
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }])
    setInput('')
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const filteredTasks = tasks.filter(task =>
    filter === 'all'
      ? true
      : filter === 'active'
      ? !task.completed
      : task.completed
  )

  return (
    <div className="space-y-4">
      <Card title="Task Manager">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-3 py-2 border rounded-md"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex gap-2 mb-4">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            onClick={() => setFilter('active')}
          >
            Active
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            onClick={() => setFilter('completed')}
          >
            Completed
          </Button>
        </div>

        {filteredTasks.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          <ul className="space-y-2">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between items-center p-2 rounded-md border ${
                  task.completed
                    ? 'bg-green-50 border-green-400 line-through text-gray-500'
                    : 'bg-white dark:bg-gray-800 border-gray-300'
                }`}
              >
                <span>{task.text}</span>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => toggleComplete(task.id)}
                  >
                    {task.completed ? 'Undo' : 'Complete'}
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}
