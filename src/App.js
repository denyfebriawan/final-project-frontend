import { Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SubPage from './pages/SubPage';
import SubSubPage from './pages/SubSubPage';

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SubPage" element={<SubPage />} />
          <Route path="/SubSubPage" element={<SubSubPage/>} /> 
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
