import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Durgam Abhilash
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full-Stack Developer | Tech Enthusiast
        </motion.p>
        
        {/* About Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-gray-300 mb-4">
            Hello! I'm Durgam Abhilash, a passionate full-stack developer with a keen interest in building robust and scalable web applications. With a strong foundation in both front-end and back-end technologies, I strive to create seamless user experiences while ensuring efficient and maintainable code.
          </p>
          <p className="text-lg text-gray-300">
            I am constantly working on new projects and improving my coding skills. My focus is on practical application of technology and continuous learning through hands-on development.
          </p>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://github.com/DurgamAbhilash44" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/durgam-abhilash-0042a4241/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:durgamabhilash798@gmail.com" className="text-gray-300 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Home