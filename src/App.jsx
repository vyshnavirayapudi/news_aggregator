import { useState } from "react";
import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import BreakingNews from "./components/BreakingNews";
import NewsCard from "./components/NewsCard";
import Loader from "./components/Loader";
import useFetchNews from "./hooks/useFetchNews";

function App() {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const { news, loading } = useFetchNews(category, searchQuery);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setSearchQuery={setSearchQuery} />

      <BreakingNews headline="Welcome to NewsSphere — Your daily news, simplified." />

      <CategoryFilter selectedCategory={category} setSelectedCategory={setCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {loading ? (
          <Loader />
        ) : (
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;