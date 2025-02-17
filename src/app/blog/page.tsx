import React from 'react';

const Blog = () => {
  // Temporary blog post data
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
    <div className="blog-container">
      <h1>My Blog</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <small>Posted on: {post.date}</small>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
