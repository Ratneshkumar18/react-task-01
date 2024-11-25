import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <div className='flex justify-around items-center'>
        <div className='text-cyan-500 text-[30px]'>
            Port<span className='text-blue-500'>foilo</span>
        </div>
        <div >
            <ul className='flex justify-between items-center gap-10'>
                <li> <NavLink to="/">Features</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
    
            </ul>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <div>Login</div>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-md'>Get Started</div>
        </div>
    </div>
    </>
   
  )
}

export default Navbar
