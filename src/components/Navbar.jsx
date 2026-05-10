import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          NewsSphere
        </h1>

        <ul className="flex gap-6 text-sm md:text-base">
          <li className="cursor-pointer hover:text-red-400 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-red-400 transition">
            Trending
          </li>
          <li className="cursor-pointer hover:text-red-400 transition">
            Bookmarks
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;