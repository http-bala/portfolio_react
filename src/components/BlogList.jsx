import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://blog-api-one-mocha.vercel.app/api/blogs');
        const blogData = response.data;

        // Sort blogs by date (descending) to show the most recent ones first
        const sortedBlogs = blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs.slice(0, 3)); // Display only the three most recent blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  const SkeletonCard = () => (
    <div className="bg-gradient-to-tl from-purple-900 via-purple-700 to-purple-600rounded-lg shadow-lg animate-pulse overflow-hidden">
      <div className="w-full h-48 bg-purple-900"></div>
      <div className="p-4">
        <div className="h-6 bg-purple-400 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-purple-400 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-purple-400 rounded w-1/4"></div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Title */}
      <h1 className="text-5xl text-center font-extrabold leading-tight text-gray-900 mb-8">
        Recent <span style={{ color: '#F2BE21' }}>Blogs</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Show Skeletons while Loading */}
        {loading
          ? Array(3)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : blogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image || 'https://via.placeholder.com/600x400'} // Default image
                date={formatDate(blog.date)} // Format date
                postBy={blog.postBy}
                title={blog.title}
                content={blog.content}
              />
            ))}
      </div>
    </div>
  );
};

export default BlogList;
