import React from "react";

const BreakingNews = ({ headline }) => {
  return (
    <div className="bg-red-600 text-white py-3 px-4 overflow-hidden">
      <div className="flex items-center gap-4">
        
        <span className="font-bold bg-white text-red-600 px-3 py-1 rounded">
          BREAKING
        </span>

        <marquee behavior="scroll" direction="left">
          {headline}
        </marquee>
      </div>
    </div>
  );
};

export default BreakingNews;