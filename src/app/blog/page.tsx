'use client';

import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: "Welcome to My Blog!",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    date: "February 17, 2025",
    photoUrl: "/images/blog.jpg",
  },
  {
    id: 2,
    title: "A Place to Unwind",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    date: "February 18, 2025",
    photoUrl: "/images/itparkcebu.jpg",
  },
  {
    id: 3,
    title: "Life in My Twenties",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    date: "February 19, 2025",
    photoUrl: "/images/work.jpg",
  },
  {
    id: 4,
    title: "Work-Life Balance",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    date: "February 19, 2025",
    photoUrl: "/images/outdoors.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl text-black md:text-2xl xl:text-3xl xl:leading-snug font-bold">
        My Blog
      </h1>
      <p className="text-content py-8 lg:max-w-3xl">
        This is a space where I share my experiences and insights on life, work, and finding balance. Whether it&apos;s discovering a peaceful spot to unwind, navigating life in my twenties, or exploring the art of maintaining work-life harmony, you&apos;ll find stories and reflections to inspire and recharge.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="blogcard max-w-[450px] w-full mx-auto bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
            <Image
              src={post.photoUrl}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-purple-600 mb-2">{post.date} | Post</p>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="text-purple-600 font-semibold">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}