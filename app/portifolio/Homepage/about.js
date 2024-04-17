import React, { useState, useEffect } from "react";

const About = () => {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [sortType, setSortType] = useState('name'); 
  const [certifications, setCertifications] = useState([
    {
      name: "AWS Cloud Technical Essentials",
      authority: "Amazon Web Services",
      date: "2023-09",
      dateString: "September 2023"
    },
    {
      name: "Career Essentials in Software Development",
      authority: "Microsoft and LinkedIn",
      date: "2023-09",
      dateString: "September 2023"
    },
    {
      name: "Certification in Programming Languages",
      authority: "ISO 9001:2015",
      date: "2023-03",
      dateString: "March 2023"
    }
  ]);

  useEffect(() => {
    setCertifications(currentCertifications =>
      [...currentCertifications].sort((a, b) => {
        if (sortType === 'name') {
          return a.name.localeCompare(b.name);
        } else {
          return a.date.localeCompare(b.date);
        }
      })
    );
  }, [sortType]);

  const handleToggleChange = () => {
    setSortType(sortType === 'name' ? 'date' : 'name');
  };

  const fetchJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    setJoke({ setup: data.setup, punchline: data.punchline });
  };

  return (
    <div id="about" className="section bg-white mt-5">
      <main className="container mx-auto p-5 min-h-screen flex flex-col items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Education</h2>
          <p className="text-gray-700 font-semibold text-xl mb-1">Southern Alberta Institute of Technology</p>
          <p className="text-gray-600 mb-1">Software Development </p>
          <p className="text-gray-600 mb-8">Diploma Program</p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Professional Experience</h2>
          <div className="bg-gray-100 p-3 rounded shadow mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">Shell Canada (C80131), Calgary, AB</h3>
            <p className="font-medium text-gray-700">Sales Associate (May 2023 - Present)</p>
            <ul className="list-disc ml-4 space-y-1 text-gray-600">
              <li>Enhance customer experience through effective communication and problem-solving skills.</li>
              <li>Utilize analytical skills to assess customer needs and provide tailored solutions.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-5">Certifications</h2>
          <div className="flex items-center mb-4">
            <label htmlFor="toggle" className="toggle-slider">
              <input id="toggle" type="checkbox" checked={sortType === 'date'} onChange={handleToggleChange} className="sr-only" />
              <div className="slider bg-gray-600 rounded-full"></div>
            </label>
            <span className="text-gray-700 font-medium">
              {sortType === 'name' ? 'Sort by Name' : 'Sort by Date'}
            </span>
          </div>
          <div className="space-y-2">
            {certifications.map(cert => (
              <div key={cert.name} className="border p-3 rounded shadow">
                <p className="text-gray-800"><b>{cert.name}</b></p>
                <p className="text-gray-600">{cert.authority}, {cert.dateString}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-8">Volunteer Experience</h2>
          <ul className="list-disc ml-5 space-y-1 ">
            <li className="text-gray-700">Executive Tech Member at Enactus SAIT</li>
            <li className="text-gray-700">Team Member at SAIT Student Code Club</li>
            <li className="text-gray-700">Volunteer at Open House organized by SAIT</li>
            <li className="text-gray-700">Innovation Launch Party Calgary 2023 volunteer from Platform Calgary</li>
            <li className="text-gray-700">Contributed to open-source projects on platforms like GitHub</li>
          </ul>
        </div>
        <button
          className="my-5 mt-8 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
          onClick={fetchJoke}
        >
          Got Bored? Click Here! 
        </button>
        {joke.setup && (
          <div className="mt-4 p-4 bg-blue-200 text-blue-800 rounded shadow">
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default About;
