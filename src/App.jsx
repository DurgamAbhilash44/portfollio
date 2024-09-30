import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Particles from './components/Particles.jsx';
import Experience from './components/Experiance.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
;



function App() {
    return (
        <BrowserRouter>
        <Navbar/>

            <Routes>
                 <Route path='/' element={<Home />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
           <Particles id='particles'/>
        </BrowserRouter>
    );
}

export default App;
