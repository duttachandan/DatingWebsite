import React, { useEffect, useState } from "react";
import Logo from "../assets/DatingLogo.png";
import { Link } from "react-router-dom";

const navLinks = [
  {
    href: "/",
    tab: "Home",
  },
  {
    href: '/packages',
    tab: "Packages",
  }
  ,
  {
    href: "/about",
    tab: "About us",
  },
  {
    href: "/signup",
    tab: "Login",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = ({ className }) => (
    <div className={className}>
      {navLinks.map((link, Index) => (
        <Link
          key={Index}
          to={link.href}
          onClick={()=> setIsMenuOpen(false)}
          className="hover:text-gray-200 cursor-pointer"
        >
          {link.tab}
        </Link>
      ))}
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
          <h1 className="text-xl md:text-2xl text-white italic font-bold">
            DatingLogo
          </h1>
        </Link>

        <NavLinks className="hidden md:flex text-white items-center gap-5" />

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
          />
        </div>
      )}
    </>
  );
};

export default Navbar;

