import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

const API_KEY = "YOUR_NEWS_API_KEY";

const SearchResults = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`
      );

      const data = await response.json();

      setArticles(data.articles || []);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for:{" "}
        <span className="text-blue-600">{query}</span>
      </h1>

      {loading ? (
        <Loader />
      ) : articles.length === 0 ? (
        <p className="text-gray-500">No articles found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;