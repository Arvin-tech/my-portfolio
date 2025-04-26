import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  // techstack: string[];
  previewLink: string;
  githubLink: string;
  // date?: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  // techstack,
  previewLink,
  githubLink,
  // date,
}: ProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 md:h-56 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col h-full grid grid-rows-[auto_1fr_auto]">
        {/* <span className="text-sm text-purple-600">{date}</span> */}
        <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="mt-4 flex items-center gap-4">
          <Link 
            href={previewLink}
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
            target="_blank"
          >
            View
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link 
            href={githubLink}
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
            target="_blank"
          >
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}