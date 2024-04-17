import React from "react";
const Home = () => {

  const Skills = () => {
    const skills = [
      {
        category: "Programming Languages",
        technologies: ["JavaScript", "Python", "Java"]
      },
      {
        category: "Frontend Development",
        technologies: ["React", "HTML", "CSS"]
      },
      {
        category: "Backend Development",
        technologies: ["Node.js", "Express"]
      },
      {
        category: "Databases and Structures",
        technologies: ["SQL", "PL/SQL"]
      }
    ];

    return (
      <div id="home" className="section">
        <div className="text-center mt-12 mb-8">
          <p className="text-xl text-black font-semibold">
            A showcase of the programming languages and tools that have shaped my development journey-
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-4 border rounded-lg shadow-lg skill-box">
              <h3 className="text-lg font-bold text-gray-800 mb-3">{skill.category}</h3>
              <ul className="list-disc pl-5">
                {skill.technologies.map(tech => (
                  <li key={tech} className="text-gray-600">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id="home" className="section">
      <main className="p-5 min-h-screen bg-white flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hi, I&apos;m Preet!
        </h1>
        <p className="text-l text-gray-600 text-center max-w-2xl">
          I am a passionate and creative web developer dedicated to building exceptional and user-friendly websites. Browse through my portfolio to explore my professional projects, personal endeavors, and the skills I bring to the table. Discover how I can help transform your ideas into digital realities.
        </p>
        <Skills />
        </main>
    </div>
  );
};

export default Home;
