import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./src/Home";
import AboutUs from "./AboutUs";

const App = () => {
  return (
    <Router>
      <>
        {/* Navbar */}
        <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold">SRC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">HOME</Nav.Link>
                <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
