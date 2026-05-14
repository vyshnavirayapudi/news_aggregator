const API_KEY = "itrVtl2D5r2Xrv9PdCKouabkBzznpufNg19gf8nF";
const BASE_URL = "https://api.thenewsapi.com/v1";

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