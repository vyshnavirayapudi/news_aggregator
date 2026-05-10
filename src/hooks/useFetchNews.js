import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../services/newsApi";

const useFetchNews = (category, searchQuery) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadNews();
  }, [category, searchQuery]);

  const loadNews = async () => {
    setLoading(true);

    const articles = await fetchTopHeadlines({
      category,
      query: searchQuery,
      page,
    });

    setNews(articles);
    setLoading(false);
  };

  return {
    news,
    loading,
    setPage,
  };
};

export default useFetchNews;