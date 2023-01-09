
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to={'/Home'}>Home</Link></Nav.Link>
              <Nav.Link><Link to={'/login'}>Sign In</Link></Nav.Link>
              <Nav.Link><Link to={'/register'}>Sign Up</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-3">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
