import React from 'react';
import Me from '../assets/me.jpg';
import { User, Briefcase, Award, Code, BookOpen } from 'lucide-react';

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
            <div className="flex items-center mb-2">
              <Briefcase className="h-5 w-5 text-blue-400 mr-2" />
              <span className="uppercase tracking-wide text-sm text-blue-400 font-semibold">Software Engineer</span>
            </div>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Durgam Abhilash
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              A passionate and driven software engineer with a strong foundation in coding and problem solving. 
              I enjoy tackling complex challenges and building dynamic applications that make a real-world impact.
            </p>
          </div>
        </div>
        
        <div className="px-8 py-6 border-t border-gray-700">
          <h2 className="flex items-center text-2xl font-bold text-teal-400 mb-4">
            <User className="h-6 w-6 mr-2" />
            About Me
          </h2>
          <p className="text-gray-300">
            With strong skills in teamwork, problem-solving, and adaptability, I am always looking for opportunities to grow, 
            innovate, and contribute to challenging projects. I thrive on staying updated with the latest technologies and 
            am excited to explore new domains in software development.
          </p>
          <div className="mt-6 flex items-center">
            <BookOpen className="h-5 w-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">Always learning, always growing</span>
          </div>
        </div>
        
        <div className="px-8 py-6 border-t border-gray-700">
          <h2 className="flex items-center text-2xl font-bold text-teal-400 mb-4">
            <Award className="h-6 w-6 mr-2" />
            Honors and Awards
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start">
              <Award className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
              <span>Secured AIR 6351 in GATE-ECE conducted by IIT Kanpur</span>
            </li>
            <li className="flex items-start">
              <Code className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span>Solved 500+ problems on GeeksForGeeks and LeetCode</span>
            </li>
            <li className="flex items-start">
              <Award className="h-5 w-5 text-purple-400 mr-2 mt-1" />
              <span>Enthusiastic about competitive programming, active at CodeChef</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;