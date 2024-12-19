import React, { useContext, useState } from "react";
import Logo from "../assets/DatingLogo.png";
import { Link } from "react-router-dom";
import { LoginContext } from "../Store/Store";

const navLinks = [
  {
    href: "/",
    tab: "Home",
  },
  {
    href: "/packages",
    tab: "Packages",
  },
  {
    href: "/about",
    tab: "About us",
  },
  {
    href: "/privacy",
    tab: "Privacy Policy",
  },
  {
    href: "/contact",
    tab: "Contact",
  },
];

const Navbar = () => {
  const { state, logOut } = useContext(LoginContext);
  console.log(state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavLinks = ({ className, user }) => (
    <div className={className}>
      {navLinks.map((link, Index) => (
        <Link
          key={Index}
          to={link.href}
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-gray-200 cursor-pointer text-nowrap"
        >
          {link.tab}
        </Link>
      ))}
      {user ? (
        <button
          className="text-white text-sm hover:text-gray-200"
          onClick={logOut}
        >
          Logout
        </button>
      ) : (
        <Link
          to="/signup"
          onClick={() => setIsMenuOpen(false)}
          className="text-white hover:from-red-500 hover:to-pink-500
          bg-gradient-to-t from-pink-500 to-red-500 text-lg
          px-8 py-2 rounded-xl font-bold md:px-6 md:py-3"
        >
          Log In
        </Link>
      )}
      {user ? (
        <div>
          <div
            className="rounded-full flex justify-center items-center py-2 
            px-4 bg-gradient-to-l from-pink-600 to-red-500 gap-2 italic"
          >
            <img
              src={user.image}
              className="w-[35px] h-[35px] rounded-full overflow-hidden"
              alt=""
            />
            <div className="text-lg text-white font-semibold uppercase">
              {user.firstName}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
  return (
    <>
      <div
        className="w-full min-h-[80px] h-fit fixed z-50 top-0 left-0 bg-black/30 
        backdrop-blur-md flex justify-between items-center px-4 lg:px-8"
      >
        <Link to="/" className="flex items-center gap-3">
          <img className="h-[40px] w-[40px]" src={Logo} alt="Dating Logo" />
          <div className="flex flex-col h-[40px] w-fit">
            <h1 className="text-xl md:text-2xl text-white font-sans italic font-bold">
              LDS
            </h1>
            <p className="text-white italic text-[0.70rem]">
              A Love Dating Site
            </p>
          </div>
        </Link>
        <NavLinks
          className="hidden md:flex text-white items-center gap-5"
          user={state.user}
        />
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Separate mobile menu with overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Mobile menu */}
          <NavLinks
            className="absolute top-[80px] left-0 w-full h-fit bg-black/40 
              backdrop-blur-xl text-white flex flex-col items-center gap-4 p-4 
              border-t border-gray-800 transition-opacity"
            user={state.user}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;