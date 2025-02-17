import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Welcome to My Blog!',
      excerpt: 'This is the first post on my new blog. Stay tuned for more content!',
      date: 'February 17, 2025',
    },
    {
      id: 2,
      title: 'How to Build a React App',
      excerpt: 'In this post, we will walk through how to build a simple React app from scratch.',
      date: 'February 18, 2025',
    },
    {
      id: 3,
      title: 'Understanding TypeScript',
      excerpt: 'A beginner’s guide to understanding the basics of TypeScript and how it improves your JavaScript code.',
      date: 'February 19, 2025',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-6">
        My Blog
      </h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
            <small className="text-gray-500 dark:text-gray-400">
              📅 {post.date}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
