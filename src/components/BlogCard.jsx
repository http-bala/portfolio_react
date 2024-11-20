import React from 'react';

// BlogCard.jsx
const BlogCard = ({ image, date, postBy, title, content }) => {
  const MAX_WORDS = 10;

  // Helper function to remove HTML tags and return plain text
  const stripHtmlTags = (html) => {
    // Create a temporary div to hold the HTML content and get the plain text
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  // Function to get the preview of the content (first 10 words)
  const getPreview = (text) => {
    const strippedText = stripHtmlTags(text);
    const words = strippedText.split(' ');
    return words.length > MAX_WORDS
      ? words.slice(0, MAX_WORDS).join(' ') + ' ...'
      : strippedText;
  };

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
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          {getPreview(content)}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
