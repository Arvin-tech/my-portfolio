import Image from "next/image";

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

      {/* Contact Section */}
      <section className="w-full bg-gray-900 py-12 text-center">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <p className="mt-2 text-gray-400">Let&apos;s work together! Reach out via email or socials.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="mailto:arvinsaguisa@gmail.com"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/arvin-s-8963512a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white"
          >
            LinkedIn
          </a>
        </div>

        <br />

        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/Arvin-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/github.svg"
                alt="github icon"
                width={16}
                height={16}
              />
              Github
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://facebook.com/arvinn.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/facebook.svg"
                alt="Facebook icon"
                width={16}
                height={16}
              />
              Facebook
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.instagram.com/arvsdotcom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/instagram.svg"
                alt="Instagram icon"
                width={16}
                height={16}
              />
              Instagram →
            </a>

          </div>

      </section>
    </div>
  );
}
