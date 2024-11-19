import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        const blogData = response.data;
          // Sort blogs by date (descending) to show the most recent first
        
        // Add base URL if the image path is relative
        const baseURL = 'http://localhost:5000/';
        const blogsWithFullImages = blogData.map((blog) => ({
          ...blog,
          image: blog.image?.startsWith('http') ? blog.image : `${baseURL}${blog.image}`,
        }));

          const sortedBlogs = blogsWithFullImages.sort((a, b) => new Date(b.date) - new Date(a.date));
          setBlogs(sortedBlogs.slice(0, 3)); // Display only the three most recent blogs
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  if (loading) {
    return <div className="text-center">Loading blogs...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl text-center font-extrabold leading-tight text-gray-900 mb-8">
        Recent <span style={{ color: '#F2BE21' }}>Blogs</span> 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            // image={blog.image || 'https://via.placeholder.com/600x400'} // Fallback image
            image={'https://via.placeholder.com/600x400'} // Fallback image
            date={formatDate(blog.date)} // Format date as "11 Nov 2024"
            postBy={blog.postBy}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
