import React from 'react'

// BlogCard.jsx
const BlogCard = ({ image, date, postBy, title }) => {
    return (
      <div className="bg-gradient-to-tl from-purple-900 via-purple-700 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-center text-sm mb-4">
            <span className="bg-yellow-500 text-purple-900 font-semibold px-3 py-1 rounded-full">
              {date}
            </span>
            <span className="text-gray-300 italic">Posted by {postBy}</span>
          </div>
          <h2 className="text-xl font-bold mb-2">
            {title}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Dive into this amazing blog and explore new ideas, tips, and insights tailored just for you.
          </p>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  