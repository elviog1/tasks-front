import { Link } from 'react-router-dom'
import bull from '../assets/bull.png'
export default function HomePage() {
  return (
    <div className="h-screen bg-zinc-900 flex justify-center items-center flex-col gap-4">
      <h1 className='font-bold text-4xl text-center text-zinc-300'>Welcome to BullTasks</h1>
      <img src={bull} alt='Bull logo' className='w-52' />
      <Link to="/login" className='text-indigo-600 text-2xl font-bold'>Login</Link>
    </div>
  )
}
