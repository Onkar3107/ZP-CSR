import React from 'react'
import CardList from '../components/CardList'

const Dashboard = () => {
  return (
    <div className="bg-gray-950 min-h-screen p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Dashboard</h1>
      <h3 className="text-2xl font-semibold text-center mb-8">List Of Organizations</h3>
      <CardList />
    </div>
  )
}

export default Dashboard
