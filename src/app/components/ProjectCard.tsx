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

export default function ProjectCard({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}: ProjectProps) {
  return (
    <div className="max-w-[400px] w-full mx-auto bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={500}
        height={200}
        className="rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      <p className="text-sm font-semibold mt-2 text-gray-600 dark:text-gray-400">
        Tech Stack: {techstack.join(", ")}
      </p>
      <div className="mt-3 flex gap-4">
        <Link
          href={previewLink}
          className="text-purple-600 hover:underline"
          target="_blank"
        >
          View
        </Link>
        <Link
          href={githubLink}
          className="text-purple-600 hover:underline"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
