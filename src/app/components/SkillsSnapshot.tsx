import Image from "next/image";

const skills = [
  { name: "HTML", image: "/icons/html5-svgrepo-com.svg" },
  { name: "CSS", image: "/icons/css3-svgrepo-com.svg" },
  { name: "JavaScript", image: "/icons/javascript-svgrepo-com.svg" },
  { name: "C#", image: "/icons/cplusplus-svgrepo-com.svg" },
  { name: "JAVA", image: "/icons/java-svgrepo-com.svg" },
  { name: "Python", image: "/icons/python-svgrepo-com.svg" },
  { name: "Flask", image: "/icons/flask-svgrepo-com.svg" },
  { name: "Google Colab", image: "/icons/colaboratory-svgrepo-com.svg" },
  { name: "Git", image: "/icons/git-svgrepo-com.svg" },
  { name: "Figma", image: "/icons/figma-svgrepo-com.svg" },
  { name: "Postman", image: "/icons/postman-icon-svgrepo-com.svg" },
  { name: "Cypress", image: "/icons/cypress-opened-svgrepo-com.svg" },
  { name: "React", image: "/icons/react-svgrepo-com.svg" },
  { name: "MySQL", image: "/icons/mysql-svgrepo-com.svg" },
  { name: "Firebase", image: "/icons/firebase-svgrepo-com.svg" },
  { name: "MongoDB", image: "/icons/mongodb-svgrepo-com.svg" },
];

const Skills = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
        <h2 className="text-3xl font-semibold text-center">
          Skills <span className="text-blue-400">Snapshot</span>
        </h2>

        <ul className="grid grid-cols-4 gap-4 py-6 mt-12 border-primary-800 ml-4 sm:ml-0">
          {skills.map(({ name, image }) => (
            <li key={name} className="flex flex-col items-center gap-1 sm:gap-2">
              <Image
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                src={image}
                alt={name}
                width={32}
                height={32}
              />
              <p className="text-xs sm:text-sm md:text-base text-primary-300">{name}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Skills;
