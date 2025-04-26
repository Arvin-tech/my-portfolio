'use client';

import ProjectCard from "@/app/components/ProjectCard";
import { projectDetails } from "@/app/data/projects";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ProjectsPage() {

  return (
    <div className="container mx-auto px-6 py-12 relative">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 mt-5 ml-5">
          My Projects
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl ml-5">
          Here are some of the projects I have worked on, showcasing my skills in software testing and web development.
        </p>
      </div>

      <div className="relative">
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
        >
          {projectDetails.map((project) => (
            <SwiperSlide key={project.title} className="pb-2"> {/* Add padding if needed */}
              <div className="mx-4"> {/* Add horizontal spacing */}
                <ProjectCard {...project} />
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