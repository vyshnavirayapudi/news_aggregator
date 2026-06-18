import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";
import { fetchTopHeadlines } from "../services/newsApi";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const data = await fetchTopHeadlines({ query });
      setArticles(data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    } else {
      setArticles([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 tracking-tight">
        Search Results for:{" "}
        <span className="text-red-500 font-black">"{query}"</span>
      </h1>

      {loading ? (
        <Loader />
      ) : articles.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-500 font-medium text-lg">No articles found matching your query.</p>
          <p className="text-gray-400 text-sm mt-1">Try checking your spelling or search for more general terms.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <NewsCard key={article.uuid || index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;