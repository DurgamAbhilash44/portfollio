import React from 'react';
import { Code, Smartphone, TrendingUp } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, features, link, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-500 mr-3" />
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Tech Stack:</h4>
        <p className="text-gray-600 dark:text-gray-300">{techStack}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Features:</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      {link && (
        <a
          href={link}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Inshorts Clone",
      description: "A news aggregation app that presents news in a concise format similar to InShorts.",
      techStack: "React.js, Node.js, Express.js, MongoDB, Material-UI",
      features: [
        "Displayed news articles in a concise, card-like format.",
        "Ensured responsiveness for both desktop and mobile devices using Material-UI.",
        "Utilized MongoDB for storing user data, preferences, and news articles."
      ],
      icon: Smartphone
    },
    {
      title: "Candy Crush Game",
      description: "A dynamic Candy Crush game using React with drag-and-drop functionality.",
      techStack: "React",
      features: [
        "Responsive layout optimized for desktops, laptops, tablets, and mobile phones.",
        "Implemented game mechanics like matching, clearing, and replacing candies.",
        "Showcased drag-and-drop functionality for candy swapping, demonstrating user interaction handling skills."
      ],
      link: "https://candycrush-game-u2bk.vercel.app/",
      icon: Code
    },
    {
      title: "React Crypto App",
      description: "A React-based web application for real-time cryptocurrency tracking and data visualization.",
      techStack: "React.js, CoinGecko API",
      features: [
        "Displayed live cryptocurrency prices, market data, and trends.",
        "Integrated interactive charts for visualizing historical price trends.",
        "Ensured seamless responsiveness across devices."
      ],
      link: "https://crypto1-1rah.onrender.com/",
      icon: TrendingUp
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-800 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;