import React, { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ article }) => {
  const { bookmarks, addBookmark, removeBookmark } = useContext(BookmarkContext);
  
  // check if this article is already bookmarked
  const isBookmarked = bookmarks.some((item) => item.url === article.url);

  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isBookmarked) {
      removeBookmark(article.url);
    } else {
      addBookmark(article);
    }
  };

  // thenewsapi.com uses image_url, newsapi.org uses urlToImage
  const imageUrl = article.image_url || article.urlToImage;
  // thenewsapi.com source is a string domain, newsapi.org source is { id, name }
  const sourceName = article.source?.name || article.source || "Global Source";

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between border border-gray-100">
      
      {/* Article Image Container */}
      <div className="relative overflow-hidden h-56 w-full">
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop"}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
        
        {/* Bookmark Overlay Button */}
        <button
          onClick={toggleBookmark}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-md text-red-500 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 border border-gray-200/50"
          aria-label={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
        >
          {isBookmarked ? (
            <FaBookmark className="text-sm md:text-base animate-pulse" />
          ) : (
            <FaRegBookmark className="text-sm md:text-base" />
          )}
        </button>

        {/* Source Badge overlaid on image bottom-left */}
        <span className="absolute bottom-3 left-4 bg-red-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
          {sourceName}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="font-extrabold text-gray-800 text-base md:text-lg mb-2.5 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors duration-200">
            {article.title}
          </h2>

          <p className="text-gray-500 text-xs md:text-sm mb-4 line-clamp-3 leading-relaxed">
            {article.description || "No description available for this article. Click Read More to read the full coverage."}
          </p>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-auto">
          <span className="text-[10px] md:text-xs text-gray-400 font-medium">
            {article.published_at ? new Date(article.published_at).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
            }) : "Recent"}
          </span>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-950 text-white px-4 py-2 rounded-xl text-xs md:text-sm font-semibold hover:bg-red-500 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;