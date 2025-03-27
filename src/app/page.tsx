import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center md:text-left px-8 md:px-20">
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

      <section className="w-full bg-gray-900 py-12 text-center text-white">
        <h2 className="text-3xl font-semibold">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="mt-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-4 border-blue-400 overflow-hidden">
            <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <h3 className="mt-6 text-xl font-bold">Software Tester / Web Developer</h3>

          <p className="mt-4 max-w-xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam lacus, posuere id
            eros vel, suscipit imperdiet lorem. Quisque volutpat, lorem in faucibus malesuada,
            purus est ullamcorper neque.
          </p>

          <Link href="/about">
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Read More
            </button>
          </Link>

        </div>
      </section>

      
      
    </div>
  );
}
