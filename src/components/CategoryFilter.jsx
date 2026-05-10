import React from "react";

const categories = [
  "General",
  "Business",
  "Technology",
  "Sports",
  "Health",
  "Entertainment",
  "Science",
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex gap-3 overflow-x-auto py-4 px-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category.toLowerCase())}
          className={`px-5 py-2 rounded-full whitespace-nowrap font-medium transition ${
            selectedCategory === category.toLowerCase()
              ? "bg-red-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;