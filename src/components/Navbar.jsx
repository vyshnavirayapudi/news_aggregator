import React, { useState } from "react";

const Navbar = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(input);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 flex-wrap">
        <h1 className="text-2xl font-bold tracking-wide">NewsSphere</h1>

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search news..."
            className="px-4 py-2 rounded-lg text-black text-sm outline-none"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
          >
            Search
          </button>
        </form>

        <ul className="flex gap-6 text-sm md:text-base">
          <li className="cursor-pointer hover:text-red-400 transition">Home</li>
          <li className="cursor-pointer hover:text-red-400 transition">Trending</li>
          <li className="cursor-pointer hover:text-red-400 transition">Bookmarks</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;