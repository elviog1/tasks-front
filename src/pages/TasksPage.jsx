import React from 'react'
import { sidebarLinks } from '../constants/sidebarLinks'
import { Link } from 'react-router-dom'

export default function TasksPage() {
  return (
    <div className='bg-zinc-900'>
      <div className='bg-zinc-600 max-w-xs flex flex-col items-center h-screen justify-around'>
        <h1>My Tasks</h1>
        <div className='flex flex-col gap-4'>
          {sidebarLinks.map(item => (
            <Link to={item.route} key={item.label}>{item.label}</Link>
          ))}
        </div>
        <h1>Log out</h1>
      </div>
    </div>
  )
}
