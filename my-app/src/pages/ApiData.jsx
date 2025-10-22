// src/pages/ApiData.jsx
import React, { useEffect, useState } from 'react'
import { fetchPosts } from '@/utils/api'
import Card from '@/components/Card'

export default function ApiData() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPosts()
        setPosts(data)
        setFilteredPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  // Handle search
  useEffect(() => {
    const results = posts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredPosts(results)
  }, [search, posts])

  if (loading) return <p>Loading posts...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">API Data (JSONPlaceholder)</h2>

      <input
        type="text"
        placeholder="Search posts by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.slice(0, 30).map((post) => (
          <Card key={post.id} title={post.title}>
            <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
