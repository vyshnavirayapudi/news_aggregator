import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import BreakingNews from "../components/BreakingNews";
import CategoryFilter from "../components/CategoryFilter";
import Loader from "../components/Loader";

const API_KEY = "YOUR_NEWS_API_KEY";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
      );

      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <BreakingNews />

      <CategoryFilter
        selectedCategory={category}
        setSelectedCategory={setCategory}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;