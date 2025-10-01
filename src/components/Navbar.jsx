import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext.jsx';
import userPhoto from '../assets/user.png';
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser, loading } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success('Logged out successfully');
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  return (
    <div className='flex justify-between items-center p-2 sm:p-4 mb-4'>
      <div className='hidden md:block'></div>
      
      {/* Navigation Links - Hidden on mobile, shown on desktop */}
      <div className='hidden md:flex gap-3 lg:gap-6 text-accent'>
        <NavLink to="/" className="hover:text-primary transition-colors">Home</NavLink>
        <NavLink to="/about" className="hover:text-primary transition-colors">About</NavLink>
        <NavLink to="/career" className="hover:text-primary transition-colors">Career</NavLink>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/career">Career</NavLink></li>
        </ul>
      </div>
      
      {/* Login Section */}
      <div className='flex gap-2 sm:gap-4 items-center login-btn'>
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full">
                <img src={user.photoURL || userPhoto} alt="User Avatar" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        ) : (
            <>
              <img className="w-8 h-8 sm:w-10 sm:h-10" src={userPhoto} alt="Default User Avatar" />
              
            </>
        )}
        {user ? (
              <button onClick={handleLogout} disabled={loading} className='btn btn-primary text-xs sm:text-sm px-4 sm:px-10'>
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Logging out...
                  </>
                  ) : (
                    'Logout'
                  )}
                </button>
              ) : (
                <Link to="/auth/login" className='btn btn-primary text-xs sm:text-sm px-4 sm:px-10'>Login</Link>
              )}
      </div>
    </div>
  )
};

export default Navbar;
