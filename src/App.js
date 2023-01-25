import { Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SubPage from './pages/SubPage';

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SubPage" element={<SubPage />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
