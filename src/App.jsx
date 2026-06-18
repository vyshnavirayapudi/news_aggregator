import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;