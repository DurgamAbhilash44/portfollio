import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl w-full mx-auto p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">Work Experience</h2>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold flex items-center text-yellow-300">
              <Briefcase className="mr-3" size={24} />
              Project Engineer
            </h3>
            <p className="text-yellow-200 flex items-center mt-2 text-lg">
              <Calendar className="mr-2" size={20} />
              Jul 2024 - Present · 3 mos
            </p>
            <p className="text-yellow-200 flex items-center mt-2 text-lg">
              <MapPin className="mr-2" size={20} />
              CDAC Bangalore · Full-time · On-site
            </p>
            <p className="mt-4 text-white text-lg leading-relaxed">
              As a full-stack developer, I specialize in building dynamic and responsive web applications using a modern tech stack. My expertise includes:
            </p>
            <ul className="list-none mt-3 space-y-3">
              {['Frontend', 'Backend', 'Collaboration', 'Problem-Solving'].map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-3 h-3 rounded-full bg-yellow-300 mt-2 mr-3"></span>
                  <div>
                    <span className="font-semibold text-yellow-300">{skill}:</span>
                    <span className="text-white"> {getSkillDescription(skill)}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white text-lg leading-relaxed">
              I thrive in fast-paced development environments and am constantly seeking opportunities to improve and grow as a software engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getSkillDescription = (skill) => {
  switch (skill) {
    case 'Frontend':
      return 'Developing user-friendly and interactive interfaces with React.js and Tailwind CSS, leveraging JavaScript for smooth and efficient functionality.';
    case 'Backend':
      return 'Building robust and scalable server-side applications using Java and Spring Boot, ensuring seamless integration between frontend and backend services.';
    case 'Collaboration':
      return 'Working in agile environments, collaborating closely with cross-functional teams to deliver high-quality software solutions.';
    case 'Problem-Solving':
      return 'Passionate about solving complex problems through clean, maintainable code and exploring new technologies to enhance productivity and user experience.';
    default:
      return '';
  }
};

export default Experience;
