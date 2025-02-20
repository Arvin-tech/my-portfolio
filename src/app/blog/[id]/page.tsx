"use client"

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: "1",
    title: "Welcome to My Blog!",
    content: "Lorem ipsum dolor sit amet is a well-known placeholder text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.",
    date: "February 17, 2025",
    photoUrl: "/images/blog.jpg",
  },
  {
    id: "2",
    title: "A Place to Unwind",
    content: "Lorem ipsum dolor sit amet is a well-known placeholder text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.",
    date: "February 18, 2025",
    photoUrl: "/images/itparkcebu.jpg",
  },
  {
    id: "3",
    title: "Life in My Twenties",
    content: "Lorem ipsum dolor sit amet is a well-known placeholder text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.",
    date: "February 19, 2025",
    photoUrl: "/images/work.jpg",
  },
  {
    id: "4",
    title: "Work-Life Balance",
    content: [
        "Lorem ipsum dolor sit amet is a well-known placeholder text used in the printing and typesetting industry.",
        "It has been the standard dummy text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.",
        "This is the third paragraph, which will only appear if it exists in the content array."
    ],
    date: "February 19, 2025",
    photoUrl: "/images/outdoors.jpg",
  },
];

// type BlogPost = {
//     id: string;
//     title: string;
//     content: string | string[];
//     date: string;
//     photoUrl: string;
//   };

export default function BlogPostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p className="text-center text-red-500">Post not found.</p>;
  }

  return (
    <div className="container mx-auto">

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
            src={post.photoUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="w-full rounded-lg"
        />
        </div>
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
            <Link href="/blog" className="text-purple-600 font-semibold">← Back to Blog</Link>

            <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>

            {/* Ensure content is always an array before mapping */}
            {(Array.isArray(post.content) ? post.content : [post.content]).map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mt-4">{paragraph}</p>
            ))}
        </div>
    </div>
  );
}
