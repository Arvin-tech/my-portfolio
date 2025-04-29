import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full bg-gray-800 py-12 px-4 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">CONTACT ME</h2>
        
        {/* Contact Form */}
        <form className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-left mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://facebook.com/arvinn.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-200"
          >
            <Image
              src="/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com/arvsdotcom/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-200"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arvin-s-8963512a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-200"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;