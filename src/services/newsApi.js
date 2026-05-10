const API_KEY = "YOUR_NEWS_API_KEY";
const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async ({
  category = "general",
  page = 1,
  query = "",
  country = "in",
}) => {
  try {
    let url = "";

    if (query) {
      url = `${BASE_URL}/everything?q=${query}&page=${page}&pageSize=10&apiKey=${API_KEY}`;
    } else {
      url = `${BASE_URL}/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=10&apiKey=${API_KEY}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};