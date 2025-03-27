import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full bg-gray-800 py-12 text-center text-white">
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
  );
};

export default Footer;
