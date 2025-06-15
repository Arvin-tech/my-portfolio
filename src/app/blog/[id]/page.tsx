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
    "id": "2",
    "title": "Work-Life Balance",
    "content": [
    "Work-life balance is something my company strongly upholds, and over time, I’ve embraced it as part of my routine.",
    "Beyond work, we engage in various activities to keep life fun and fulfilling. We play basketball, compete in online games, and even go on outdoor adventures together. These activities not only help us relax but also strengthen our team bond.",
    "Taking breaks and making time for personal growth and social activities has been a game-changer for me. Whether it's through sports, gaming, or simply unwinding with friends, I’ve learned that balance is key to staying productive and happy."
    ],
    "date": "February 19, 2025",
    "photoUrl": [
      "/images/work/koda-samgyup.jpg",
      "/images/work/koda-somac.jpg",
      "/images/outdoors/kanirag-group.jpg",
      "/images/work/koda-xmas.jpg",
    ]
  },
  {
    "id": "3",
    "title": "Outdoor Life",
    "content": [
      "The mountain is calling! My outdoor adventures began in 2023 with friends. We started our journey by hiking to Cebu's Starbuks Trail. Approximately just a 45-minute hike from Paseo Arcenas in Banawa, the famous Starbuks trail offers hikers a spectacular view of the sunrise over the city of Cebu.",
      "After that, we took on a bigger challenge at Spartan Trail. The trek was tough, with rocky paths and steep climbs, but the view at the top was breathtaking.",
      "After conquering Spartan, we set our sights on Mt. Kanirag, located in the highlands of Cebu City. This mountain offers breathtaking views and a rewarding climb.",
      "Lataban Hills was another exciting trek, featuring rolling hills and open landscapes that gave us a different kind of adventure which tested our endurance with long trails and sunny weather.",
      "Mt. Kapayas in Catmon Cebu was our recent stop and one of the most challenging parts was the 'Face the Wall' section, a steep rock ascent that required careful footing and upper body strength to climb. The journey was tough, but the untouched beauty of the place made it all worth it",
      "I also hiked alone to push my limits and understand my endurance better. Solo hiking taught me patience, resilience, and appreciation for the outdoors."
    ],
    "date": "February 18, 2025",
    "photoUrl": [
      "/images/outdoors/kanirag.jpg",
      "/images/outdoors/kaniraghike.jpg",
      "/images/outdoors/kanirag-hike-rock.jpg",
      "/images/outdoors/starbuks.jpg",
      "/images/outdoors/spartanhike.jpg",
      "/images/outdoors/camp-adela.jpg",
      "/images/outdoors/latabanhike.jpg",
      "/images/outdoors/catmonhike.jpg",
      "/images/outdoors/truck.jpg",
      "/images/outdoors/mountain_view.jpg",
      "/images/outdoors/rock_view.jpg",
      "/images/outdoors/solo.jpg",
      "/images/outdoors/group.jpg",
    ]
  },
  {
    "id": "4",
    "title": "Adulting Chronicles",
    "content": [
      "Adulting is a journey of responsibilities, from managing finances to balancing work and personal life.",
      "Spending time with friends during team dinners and celebrations makes the journey easier and more enjoyable.",
      "The reality of bills, career growth, and maintaining relationships is challenging, but with the right mindset, it's a rewarding experience."
    ],
    "date": "February 19, 2025",
    "photoUrl": [
      "/images/friends/team_dinner.jpg",
      "/images/friends/halloween.jpg",
      "/images/friends/angels_pizza.jpg",
      "/images/friends/jonies_dinner.jpg",
      "/images/friends/dohera.jpg",
      "/images/friends/boys_pizza.jpg"
    ]
  },
  {
    "id": "5",
    "title": "Adulting Chronicles",
    "content": [
      "Adulting is a journey of responsibilities, from managing finances to balancing work and personal life.",
      "Spending time with friends during team dinners and celebrations makes the journey easier and more enjoyable.",
      "The reality of bills, career growth, and maintaining relationships is challenging, but with the right mindset, it's a rewarding experience."
    ],
    "date": "February 19, 2025",
    "photoUrl": [
      "/images/friends/team_dinner.jpg",
      "/images/friends/halloween.jpg",
      "/images/friends/angels_pizza.jpg",
      "/images/friends/jonies_dinner.jpg",
      "/images/friends/dohera.jpg",
      "/images/friends/boys_pizza.jpg"
    ]
  },
  {
    "id": "6",
    "title": "Adulting Chronicles",
    "content": [
      "Adulting is a journey of responsibilities, from managing finances to balancing work and personal life.",
      "Spending time with friends during team dinners and celebrations makes the journey easier and more enjoyable.",
      "The reality of bills, career growth, and maintaining relationships is challenging, but with the right mindset, it's a rewarding experience."
    ],
    "date": "February 19, 2025",
    "photoUrl": [
      "/images/friends/team_dinner.jpg",
      "/images/friends/halloween.jpg",
      "/images/friends/angels_pizza.jpg",
      "/images/friends/jonies_dinner.jpg",
      "/images/friends/dohera.jpg",
      "/images/friends/boys_pizza.jpg"
    ]
  }
];


export default function BlogPostPage() {
  const params = useParams();
  const id = params?.id as string;
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

      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
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
