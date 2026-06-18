const API_KEY = "itrVtl2D5r2Xrv9PdCKouabkBzznpufNg19gf8nF";
const BASE_URL = "https://api.thenewsapi.com/v1/news";

export const fetchTopHeadlines = async ({
  category = "general",
  page = 1,
  query = "",
  locale = "",
}) => {
  try {
    // Default to English language filter (language=en) to prevent mixing languages.
    // thenewsapi.com uses limit for page size and api_token for authentication.
    let url = `${BASE_URL}/all?api_token=${API_KEY}&page=${page}&limit=10&language=en`;

    if (query) {
      url += `&search=${encodeURIComponent(query)}`;
    } else if (category) {
      url += `&categories=${category}`;
    }

    if (locale) {
      url += `&locale=${locale}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // thenewsapi.com returns results under "data" array
    return data.data || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};