import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home/home';
import Presentation from './components/pages/presentation/presentation';
import Contact from './components/pages/contact/contact';
import Projects from './components/pages/projects/projects';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/presentation' element={<Presentation/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
