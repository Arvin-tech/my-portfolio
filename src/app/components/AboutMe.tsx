import Image from "next/image";
import Link from "next/link";
import { personalDetails } from "@/app/data/details";

const About = () => {
  return (
    <section className="w-full bg-gray-900 py-12 text-center text-white">
      <h2 className="text-3xl font-semibold">
        About <span className="text-blue-400">Me</span>
      </h2>

      <div className="mt-8 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full border-4 border-blue-400 overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="mt-6 text-xl font-bold">{personalDetails.role}</h3>

        <p className="mt-4 max-w-xl text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam
          lacus, posuere id eros vel, suscipit imperdiet lorem. Quisque
          volutpat, lorem in faucibus malesuada, purus est ullamcorper neque.
        </p>

        <Link href="/about">
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
