import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg";
import { NavbarLinks } from '../../data/navbar_links';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Slice/AuthSlice';
import toast from 'react-hot-toast';
import { FaInstagram, FaBars, FaTimes, FaYoutube } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { AiOutlineYoutube } from 'react-icons/ai';

const Navbar = () => {
  const { token, user } = useSelector((state) => state.auth);
  const [showLogout, setShowLogout] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    toast.success("Logged Out");
    dispatch(logout());
    setShowLogout(false);
  };

  const profileImageUrl = `https://api.dicebear.com/5.x/initials/svg?seed=${user?.firstName} ${user?.lastName}`;

  return (
    <header className="bg-[#140735] text-white shadow-[0px_0px_10px_0px_#333]">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo - Left on all screens */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} width={130} height={70} loading="lazy" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation Links - Center on lg screens */}
        <nav className="hidden lg:flex space-x-6 flex-grow justify-center">
          <ul className="flex space-x-6">
            {NavbarLinks.map((link, index) => (
              <React.Fragment key={index}>
                {link.title === 'AI Tools' && !token ? null : (
                  <Link to={link.path}>
                    <li className="hover:text-[#C276F0]">
                      {link.title}
                    </li>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

       <div className='flex gap-5'>
        {/* User Profile, Social Icons, and Login/Signup - Right on all screens */}
        <div className="flex items-center lg:space-x-4 mobile-l:space-x-2">
          {token ? (
            <div  className='flex space-x-4 items-center'>
              {/* Social media icon after login */}
              <div className='hidden
               mobile-l:block mobile-l:mr-0
               sm:block 
               md:block text-lg hover:text-[#993efc] hover:scale-110'>
                <FaInstagram/>
              </div>

              <div className='hidden
               mobile-l:block mobile-l:mr-0
               sm:block 
               md:block text-lg hover:text-[#993efc] hover:scale-110'>
                <AiOutlineYoutube/>
              </div>

              {/* Profile & logout after login */}
              <div className="relative">
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setShowLogout(!showLogout)}
              />
              {showLogout && (
                <div className="absolute right-0 bg-[#993efc] text-black shadow-lg rounded-md z-50 mt-2 w-[150px]">
                <div className="px-4 py-2 border-b text-white">
                  {user?.firstName} {user?.lastName}
                </div>
                <button
                  className="cursor-pointer w-full text-left px-4 py-2 text-white hover:bg-[#7a2bdc] rounded-b-md"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              )}
              </div>
            </div>
          ) : (
            <>
            <div className='flex justify-center items-center -mr-3'>
              {/* Social Media Icons (Visible on lg screens) */}
              <Link to="https://www.instagram.com/cybermass.ai" 
               className="hidden 
               mobile-l:block mobile-l:mr-4
               sm:block 
               md:block text-lg hover:text-[#993efc] hover:scale-110">
                <FaInstagram />
              </Link>

              <Link to="https://www.youtube.com/cybermass.ai" 
               className="hidden 
               mobile-l:block mobile-l:mr-4
               sm:block lg:text-[20px]
               md:block text-lg hover:text-[#993efc] hover:scale-110
               ">
                <AiOutlineYoutube/>
              </Link>
              </div>

              {/* Login/Signup Links */}
              <Link to="/login">
                <button 
                className="hidden 
                mobile-l:block mobile-l:px-[5px] mobile-l:py-1 mobile-l:text-[14px]
                sm:block md:block border hover:border-[#993efc] 
                lg:px-[10px] lg:py-[5px] lg:text-[16px] rounded-md hover:text-[#993efc]">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button 
                className="hidden 
                mobile-l:block mobile-l:px-[5px] mobile-l:py-1 mobile-l:text-[14px]
                sm:block md:block border hover:border-[#993efc] 
                lg:px-[10px] lg:py-[5px] lg:text-[16px] rounded-md hover:text-[#993efc]">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle Button - Right on sm and md */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            className="text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-[#140735] text-white">
          <ul className="flex flex-col items-center space-y-6 py-6">
            {NavbarLinks.map((link, index) => (
              <React.Fragment key={index}>
                {link.title === 'AI Tools' && !token ? null : (
                  <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                    <li className="text-white hover:text-[#C276F0]">
                      {link.title}
                    </li>
                  </Link>
                )}
              </React.Fragment>
            ))}
            <div className="flex flex-col items-center space-y-4">
              {token ? (
                <div className='flex justify-center items-center flex-col gap-4'>
                 <div>
                   <img
                     src={profileImageUrl}
                     alt="Profile"
                     className="w-10 h-10 rounded-full cursor-pointer"
                     onClick={() => setShowLogout(!showLogout)}
                     />
                   </div>

                   {/* <div className='flex-row '>
                    <Link to="https://www.instagram.com/cybermass.ai" className="text-lg hover:text-[#993efc] hover:scale-110">
                      <FaInstagram />
                      <FaYoutube />
                    </Link>
                  </div> */}

                  </div>
              ) : (
                <>
                  <Link to="https://www.instagram.com/cybermass.ai" className="text-lg hover:text-[#993efc] hover:scale-110">
                    <FaInstagram />
                  </Link>
                  <Link to="/login">
                    <button className="border hover:border-[#993efc] px-[10px] py-[5px] rounded-md hover:text-[#993efc]">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="border hover:border-[#993efc] px-[10px] py-[5px] rounded-md hover:text-[#993efc]">
                      Signup
                    </button>
                  </Link>
                </>
              )}
            </div>
          </ul>
        </nav>
      )}

    </header>
  );
};

export default Navbar;
