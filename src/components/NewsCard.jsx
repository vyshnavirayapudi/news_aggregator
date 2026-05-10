import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      
      <img
        src={
          article.urlToImage ||
          "https://via.placeholder.com/400x250?text=News+Image"
        }
        alt={article.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg mb-2 line-clamp-2">
          {article.title}
        </h2>

        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {article.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {article.source?.name}
          </span>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;