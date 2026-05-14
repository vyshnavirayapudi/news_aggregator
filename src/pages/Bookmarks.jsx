import React, { useContext } from "react";
import NewsCard from "../components/NewsCard";
import { BookmarkContext } from "../context/BookmarkContext";

const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Bookmarked Articles</h1>

      {bookmarks.length === 0 ? (
        <p className="text-center text-gray-500">No bookmarked articles yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookmarks.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;