import React from 'react'
import { NavLink } from 'react-router-dom'
import { Search, Bookmark, User, Home, Tv, Compass } from 'lucide-react'
const Navbar = () => {

  return (
    <>

      <div className='sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-16 py-2 text-white bg-black/10 backdrop-blur-2xl'>

        <div className='text-white flex items-center justify-center gap-8'>
          <img className='cursor-pointer w-30 h-16 lg:w-40 lg:h-16 rounded-full' src={'/images/logo.png'} alt="Logo" />


          <h2 className='hidden lg:flex items-center cursor-pointer gap-2 bg-[#353535] hover:bg-[#2d2d33] transition duration-300 px-3 py-2 rounded-full'>
            <Search className='w-4 h-4' /> Search
          </h2>
          <NavLink title='On Demand' className={'hidden lg:block text-sm px-3 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold'}>
            On Demand  
          </NavLink>
          <NavLink title='Discover' className={'hidden lg:block text-sm px-3 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold'}>
            Discover
          </NavLink>
        </div>

        {/* Right Side: Desktop Buttons & Mobile/Tab Icons */}
        <div className='flex items-center gap-3 lg:gap-6'>
          {/* Mobile & Tab Search Icon */}
          <button className='lg:hidden p-2 rounded-full bg-[#353535] hover:bg-[#2d2d33] transition duration-300 cursor-pointer'>
            <Search className='w-5 h-5' />
          </button>

          {/* My Lists (Icon on Mobile/Tab, Text + Icon on Desktop) */}
          <NavLink className={'flex items-center gap-1 text-sm p-2 lg:px-3 lg:py-2 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold'}>
            <Bookmark className='w-5 h-5 lg:w-4 lg:h-4' />
            <span className='hidden lg:inline'>My Lists</span>
          </NavLink>

          {/* Sign In (User Icon on Mobile/Tab, Text Button on Desktop) */}
          <NavLink className={'text-sm p-2 lg:px-3 lg:py-2 rounded-full bg-white text-black transition duration-300 font-semibold flex items-center justify-center'}>
            <User className='w-5 h-5 lg:hidden' />
            <span className='hidden lg:inline'>Sign In</span>
          </NavLink>
        </div>
      </div>

      {/* Bottom Navbar for Mobile & Tab View */}
      <div className='lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-3 text-white bg-black/40 backdrop-blur-2xl border-t border-white/10'>
        <NavLink title='Home' className={'flex flex-col items-center gap-1 text-xs px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold'}>
          <Home className='w-5 h-5' />
          
        </NavLink>
        <NavLink title='On Demand' className={'flex flex-col items-center gap-1 text-xs px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold'}>
          <Tv className='w-5 h-5' />
        </NavLink>
        <NavLink title='Discover' className={'flex flex-col items-center gap-1 text-xs px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold'}>
          <Compass className='w-5 h-5' />
        </NavLink>
      </div>
    </>
  )
}

export default Navbar