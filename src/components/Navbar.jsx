import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaBookmark, FaHome } from "react-icons/fa";

const Navbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/search?q=${encodeURIComponent(input.trim())}`);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black/95 backdrop-blur-md text-white px-6 py-4 shadow-xl sticky top-0 z-50 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 flex-wrap">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        >
          <span>NewsSphere</span>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search global news..."
            className="w-48 sm:w-64 pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-white text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
          />
          <FaSearch className="absolute left-3.5 text-gray-500 text-sm" />
          <button
            type="submit"
            className="absolute right-1 bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold transition duration-300"
          >
            Go
          </button>
        </form>

        {/* Links */}
        <ul className="flex gap-6 text-sm font-semibold tracking-wide">
          <li>
            <Link
              to="/"
              className={`flex items-center gap-1.5 transition-all duration-300 ${
                isActive("/") ? "text-red-500 scale-105" : "text-gray-300 hover:text-red-400"
              }`}
            >
              <FaHome className="text-base" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/bookmarks"
              className={`flex items-center gap-1.5 transition-all duration-300 ${
                isActive("/bookmarks") ? "text-red-500 scale-105" : "text-gray-300 hover:text-red-400"
              }`}
            >
              <FaBookmark className="text-base" />
              <span>Bookmarks</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;