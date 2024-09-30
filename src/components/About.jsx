import React from 'react';
import Me from '../assets/me.jpg';

const About = () => {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl w-full rounded-xl shadow-2xl overflow-hidden bg-gray-800">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-48 flex items-center justify-center p-4">
            <img
              className="h-48 w-48 rounded-full object-cover md:rounded-none md:h-full md:w-48"
              src={Me}
              alt="Durgam Abhilash"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-400 font-semibold">Software Engineer</div>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Durgam Abhilash
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              A passionate and driven software engineer with a strong foundation in coding and problem solving. 
              I enjoy tackling complex challenges and building dynamic applications that make a real-world impact.
            </p>
          </div>
        </div>
        
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">About Me</h2>
          <p className="text-gray-300">
            With strong skills in teamwork, problem-solving, and adaptability, I am always looking for opportunities to grow, 
            innovate, and contribute to challenging projects. I thrive on staying updated with the latest technologies and 
            am excited to explore new domains in software development.
          </p>
          <div className="mt-6 flex items-center">
            <span className="text-blue-400 font-semibold">Always learning, always growing</span>
          </div>
        </div>
        
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Honors and Awards</h2>
          <ul className="text-gray-300 list-disc list-inside">
            <li>Secured AIR 6351 in GATE-ECE conducted by IIT Kanpur</li>
            <li>Solved 500+ problems on GeeksForGeeks and LeetCode</li>
            <li>Enthusiastic about competitive programming, active at CodeChef</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;