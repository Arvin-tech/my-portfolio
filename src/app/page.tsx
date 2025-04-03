import Image from "next/image";
import Skills from "./components/SkillsSnapshot";
import About from "./components/AboutMe";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white w-full">
      {/* Hero Section h-[900px] or h-[80vh] or h-screen */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center md:text-left px-8 md:px-20">
        {/* Background Cover Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/outdoors/catmon.jpg"
            alt="Cover Background"
            fill
            className="object-cover w-screen h-screen brightness-50"
          />
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
