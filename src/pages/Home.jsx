import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import BreakingNews from "../components/BreakingNews";
import CategoryFilter from "../components/CategoryFilter";
import Loader from "../components/Loader";
import { fetchTopHeadlines } from "../services/newsApi";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const data = await fetchTopHeadlines({ category });
      setArticles(data);
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
      <BreakingNews headline={articles[0]?.title || "Stay updated with the latest news!"} />

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