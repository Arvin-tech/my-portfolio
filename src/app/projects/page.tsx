import ProjectCard from "@/app/components/ProjectCard";
import { projectDetails } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <br /><br />
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p className="paragraph-color mb-6">
        Here are some of the projects I have worked on, showcasing my skills in software testing, and web development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectDetails.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
