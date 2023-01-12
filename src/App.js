import { Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
