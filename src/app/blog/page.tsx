'use client';

import Image from 'next/image';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const posts = [
  {
    id: 2,
    title: "Work-Life Balance",
    excerpt: "Balancing work and personal life can be challenging, but finding time to unwind is essential.",
    date: "February 19, 2025",
    photoUrl: "/images/work/koda-samgyup.jpg",
  },
  {
    id: 3,
    title: "Outdoor Life",
    excerpt: "Exploring the great outdoors offers a refreshing escape from daily routines.",
    date: "February 18, 2025",
    photoUrl: "/images/outdoors/catmon.jpg",
  },
  {
    id: 4,
    title: "Adulting Chronicles",
    excerpt: "Navigating life in your twenties comes with excitement, challenges, and self-discovery.",
    date: "February 19, 2025",
    photoUrl: "/images/friends/angels_pizza.jpg",
  },
  {
    id: 5,
    title: "Test321",
    excerpt: "Navigating life in your twenties comes with excitement, challenges, and self-discovery.",
    date: "February 20, 2025",
    photoUrl: "/images/outdoors/rock_view.jpg",
  },
  {
    id: 6,
    title: "Test123",
    excerpt: "Navigating life in your twenties comes with excitement, challenges, and self-discovery.",
    date: "February 20, 2025",
    photoUrl: "/images/outdoors/truck.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-12 relative">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 mt-10 ml-5">
          My Blog
        </h1>
        <p className="text-gray-600 text-lg max-w-5xl ml-5">
          This is a space where I share my experiences and insights on life, work, and finding balance. 
          Whether discovering a peaceful spot to unwind or exploring the art of maintaining work-life harmony.
        </p>
      </div>

      <div className="relative group">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.projects-next',
            prevEl: '.projects-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12" // Add padding for navigation dots if pagination is enabled
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="pb-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col mx-4">
                <div className="relative h-48 md:h-56 w-full">
                  <Image
                    src={post.photoUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <span className="text-sm text-purple-600">{post.date}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        
        <button 
          className="projects-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transform -translate-x-1/2"
          aria-label="Previous project"
          style={{ left: '-20px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="projects-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transform translate-x-1/2"
          aria-label="Next project"
          style={{ right: '-20px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}