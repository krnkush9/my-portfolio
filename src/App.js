import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className=" w-full h-full text-[#333333] pb-5">

      <div className="w-11/12 mx-auto">
        {/* navbar */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
        {/* footer */}
        <Footer />
      </div>

    </div>
  );
}

export default App;
