import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4">404</h2>
        <p className="text-xl text-gray-700 mb-8">Oops! The page you’re looking for can’t be found.</p>
        <Link to="/" className="text-indigo-600 font-semibold hover:underline">
          Return Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
