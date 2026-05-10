import { createContext, useEffect, useState } from "react";

export const BookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (article) => {
    const exists = bookmarks.find((item) => item.url === article.url);

    if (!exists) {
      setBookmarks([...bookmarks, article]);
    }
  };

  const removeBookmark = (url) => {
    setBookmarks(bookmarks.filter((item) => item.url !== url));
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;