import React from 'react';
import { Code, Award, Terminal, Monitor, GitBranch, Activity } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal className="text-indigo-500" />,
      skills: ["C++", "C", "JavaScript", "Java", "Spring Boot", "HTML", "CSS", "Tailwind CSS", "React", "Redux Toolkit", "MongoDB", "Node.js", "ExpressJs", "NextJs"]  
    },
    {
      title: "IT Constructs",
      icon: <Monitor className="text-teal-500" />,
      skills: ["Data Structures and Algorithms", "Computer Networks", "SQL", "DBMS", "Operating Systems", "Git", "GitHub"]
    },
    {
      title: "Platforms",
      icon: <GitBranch className="text-green-500" />,
      skills: ["Windows"]
    },
    {
      title: "Soft Skills",
      icon: <Activity className="text-yellow-500" />,
      skills: ["Problem solving", "Teamwork", "Adaptability", "Time Management"]
    }
  ];

  return (
    
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-purple-600">My Skills & Achievements</h1>

        {/* Technical Skills Section */}
        <div className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center text-purple-500">
            <Code className="mr-2 text-gray-600" />
            Technical Skills
          </h2>
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center mb-3">
                {category.icon}
                <h3 className="ml-2 text-lg font-medium text-purple-600">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>

     
    
  );
};

export default Skills;
