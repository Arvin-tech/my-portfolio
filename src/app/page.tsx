"use client";

import Image from "next/image";
import Skills from "./components/SkillsSnapshot";
import About from "./components/AboutMe";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/images/home_slider/image3.jpg",
  "/images/home_slider/image1.jpg",
  "/images/home_slider/image2.jpg",
  "/images/home_slider/image4.jpg",
];

export default function Home() {

  return (
    <div className="min-h-screen bg-[#0a192f] text-white w-full">
      {/* Hero Section h-[900px] or h-[80vh] or h-screen */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center md:text-left px-8 md:px-20">
        {/* Background Cover Image */}
        <div className="absolute inset-0 w-full h-full">

        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={false}
            className="w-full h-full"
          >
            {images.map((url, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={url}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover w-full h-full brightness-50"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Content */}
        <div className="relative z-10 text-center md:text-left max-w-4xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Arvs</h1>
          <h2 className="text-xl md:text-2xl text-blue-400 mt-2">
            Software Test Engineer 
          </h2>
          <p className="mt-4 text-gray-300">
            Disclaimer: This portfolio is under development
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                Hire Me
              </button>
            </a>
            <button className="border border-blue-400 text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-400 hover:text-white">
              Let&apos;s Talk
            </button>
          </div>          

        </div>
      </section>

     {/* Other Sections in Form of a Component */}
      <About />
      <Skills />

      
    </div>
  );
}
