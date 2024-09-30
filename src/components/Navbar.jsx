import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl flex items-center">
            <img src={Logo} alt="Logo" className="w-8 h-8 rounded-full mr-2" />
            <span className="hidden sm:inline">Durgam</span>
          </Link>
          
         
          <ul className="hidden md:flex space-x-4">
         
            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
            <li><Link to="/experience" className="text-white hover:text-gray-300">Experience</Link></li>
            <li><Link to="/skills" className="text-white hover:text-gray-300">Skills</Link></li>
            <li><Link to="/projects" className="text-white hover:text-gray-300">Projects</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
          </ul>
          
         
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            <li><Link to="/about" className="block text-white hover:text-gray-300" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/experience" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/skills" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Skills</Link></li>
            <li><Link to="/projects" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/contact" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;