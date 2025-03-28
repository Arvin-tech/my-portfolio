import Image from "next/image";

const skills = [
  { name: "HTML", image: "/icons/html5-svgrepo-com.svg" },
  { name: "CSS", image: "/icons/css3-svgrepo-com.svg" },
  { name: "JavaScript", image: "/icons/javascript-svgrepo-com.svg" },
  { name: "PHP", image: "/icons/php-svgrepo-com.svg" },
  { name: "C#", image: "/icons/cplusplus-svgrepo-com.svg" },
  { name: "JAVA", image: "/icons/java-svgrepo-com.svg" },
  { name: "Python", image: "/icons/python-svgrepo-com.svg" },
  { name: "Flask", image: "/icons/flask-svgrepo-com.svg" },
  { name: "Google Colab", image: "/icons/colaboratory-svgrepo-com.svg" },
  { name: "Github", image: "/icons/github-svgrepo-com.svg" },
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

        <ul className="grid grid-cols-2 sm:grid-cols-2 py-6 mt-12 border-primary-800 md:grid-cols-4 gap-8 ml-20">
          {skills.map(({ name, image }) => (
            <li key={name} className="flex items-center gap-2">
              <Image className="w-6 h-6" src={image} alt={name} width={24} height={24} />
              <p className="text-base text-primary-300">{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
