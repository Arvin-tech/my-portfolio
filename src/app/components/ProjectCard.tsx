import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  techstack: string[];
  previewLink: string;
  githubLink: string;
}

export default function ProjectCard({ title, image, description, techstack, previewLink, githubLink }: ProjectProps) {
  return (
    // bg-dark-card
    <div className="card p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <Image src={image} alt={title} width={500} height={200} className="rounded-lg" />
      <br />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      <p className="text-sm font-semibold mt-2">Tech Stack: {techstack.join(", ")}</p>
      <div className="mt-3 flex gap-4">
        <Link href={previewLink} className="text-blue-500 hover:underline" target="_blank">
          View
        </Link>
        <Link href={githubLink} className="text-blue-500 hover:underline" target="_blank">
          GitHub
        </Link>
      </div>
    </div>

  );
}
