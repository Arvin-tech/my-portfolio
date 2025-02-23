"use client"

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const posts = [
  {
    id: "1",
    title: "Welcome to My Blog!",
    content: "Lorem ipsum dolor sit amet is a well-known placeholder text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.",
    date: "February 17, 2025",
    photoUrl: ["/images/blog_thumbnails/blog.jpg", "/images/blog_thumbnails/blog.jpg"],
  },
  {
    id: "2",
    title: "Work-Life Balance",
    content: [
        "Lorem ipsum dolor sit amet is a well-known placeholder text used in the printing and typesetting industry.",
        "It has been the standard dummy text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.",
        "This is the third paragraph, which will only appear if it exists in the content array."
    ],
    date: "February 19, 2025",
    photoUrl: [
      "/images/work/koda-samgyup.jpg",
      "/images/work/koda-somac.jpg",
      "/images/outdoors/kanirag-group.jpg",
      "/images/work/koda-xmas.jpg",
      "/images/work/catmon-group.jpg"
    ],
  },
  {
    id: "3",
    title: "Outdoor Life",
    content: "Lorem ipsum dolor sit amet is a well-known placeholder text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.",
    date: "February 18, 2025",
    photoUrl: [
      "/images/outdoors/kanirag.jpg", 
      "/images/outdoors/kaniraghike.jpg", 
      "/images/outdoors/kanirag-hike-rock.jpg",
      "/images/outdoors/starbuks.jpg",
      "/images/outdoors/spartanhike.jpg",
      "/images/outdoors/camp-adela.jpg",
      "/images/outdoors/camp-adela-solo.jpg",
      "/images/outdoors/latabanhike.jpg", 
      "/images/outdoors/catmonhike.jpg"
      
    ],
  },
  {
    id: "4",
    title: "Life in My Twenties",
    content: "Lorem ipsum dolor sit amet is a well-known placeholder text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.",
    date: "February 19, 2025",
    photoUrl: [
      "/images/friends/team_dinner.jpg",
      "/images/friends/halloween.jpg", 
      "/images/friends/angels_pizza.jpg",
      "/images/friends/dohera.jpg",
      "/images/friends/boys_pizza.jpg"
    ],
  },

];

export default function BlogPostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p className="text-center text-red-500">Post not found.</p>;
  }

  return (
    <div className="container mx-auto">
      <br /><br /><br />
      {/* Image Carousel */}
      <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg"
        >
          {post.photoUrl.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src={url}
                  alt={`Slide ${index + 1}`}
                  fill
                  objectFit="cover"
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
        <Link href="/blog" className="text-purple-600 font-semibold">
          ← Back to Blog
        </Link>

        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">{post.date}</p>

        
        {/* Blog Content */}
        {(Array.isArray(post.content) ? post.content : [post.content]).map((paragraph, index) => (
          <p key={index} className="text-gray-700 text-lg leading-relaxed mt-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
