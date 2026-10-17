import { useAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom'
import { Search, Bookmark, User, Home, Tv, Compass } from 'lucide-react'
const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>

      <div className='sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-16 py-2 text-white bg-black/10 backdrop-blur-2xl'>

        <div className='text-white flex items-center justify-center gap-8'>
          <NavLink to={'/'}>
            <img className='cursor-pointer w-30 h-16 lg:w-40 lg:h-16 rounded-full' src={'/images/logo.png'} alt="Logo" />

          </NavLink>

          <NavLink to={'/search'} className='hidden lg:flex items-center cursor-pointer gap-2 bg-black/30 hover:bg-black/20 transition duration-300 px-3 py-2 rounded-full'>
            <Search className='w-4 h-4' /> Search
          </NavLink>

          <NavLink to={'/ondemand'} title='On Demand' className={(e) => `${e.isActive ? "border border-[#3F3F3F]" : ""} hidden lg:block text-sm px-3 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold`}>
            On Demand
          </NavLink>

          <NavLink to={'/discover'} title='Discover' className={(e) => `${e.isActive ? "border border-[#3F3F3F]" : ""} hidden lg:block text-sm px-3 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold`}>
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

            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL || "[https://ui-avatars.com/api/?name=](https://ui-avatars.com/api/?name=)" + user.displayName}
                  alt="Profile"
                  title={user.displayName || user.email}
                  className="w-8 h-8 rounded-full border border-white/20 object-cover"
                />

                <button
                  onClick={logOut}
                  title="Logout"
                  className="text-xs px-3 py-2 rounded-full bg-red-600/80 hover:bg-red-600 text-white transition font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <logOut className="w-4 h-4" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </div>
            ) : (
              <NavLink className="text-sm p-2 lg:px-2 lg:py-2 rounded-full bg-white text-black transition duration-300 font-semibold flex items-center justify-center" to="/signin">
                <span className="hidden lg:inline">Sign In</span>
                <User className='w-5 h-5 lg:hidden' />
              </NavLink>
            )}
          </NavLink>
        </div>
      </div>

      <div className='lg:hidden fixed bottom-0 left-0 right-0 z-10 flex items-center justify-around py-3 text-white bg-black/40 backdrop-blur-2xl border-t border-white/10'>
        <NavLink to={'/'} title='Home' className={({ isActive }) => `${isActive ? "border border-[#3F3F3F]" : ""} flex flex-col items-center gap-1 text-xs px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold`}>
          <Home className='w-5 h-5' />
        </NavLink>

        <NavLink to={'/ondemand'} title='On Demand' className={({ isActive }) => `${isActive ? "border border-[#3F3F3F]" : ""} flex flex-col items-center gap-1 text-xs px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold`}>
          <Tv className='w-5 h-5' />
        </NavLink>

        <NavLink
          to={'/discover'}
          title='Discover'
          className={({ isActive }) => `${isActive ? "border border-[#3F3F3F]" : ""} flex flex-col items-center gap-1 text-xs px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold`}>
          <Compass className='w-5 h-5' />
        </NavLink>

      </div>

    </div>
  )
}

export default Navbar