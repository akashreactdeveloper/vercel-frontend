import React from 'react'
import { Link } from 'react-router-dom'

const Others = () => {
  return (
    <div className='button justify-center p-10 '>
      <Link to={"/returnable"} className='bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[180px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center'>Returnable</Link>
      <Link to={"/nonreturnable"} className='bg-red-600 hover:bg-red-800 text-white px-6 py-2 w-full max-w-[180px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 text-center'>Non-Returnable</Link>
    </div>
  )
}

export default Others
