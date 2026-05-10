export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const truncateText = (text, maxLength = 100) => {
  if (!text) return "";

  return text.length > maxLength
    ? text.substring(0, maxLength) + "..."
    : text;
};