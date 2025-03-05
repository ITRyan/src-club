import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Classes from "./Classes";
import Register from "./Register";
import PhotoGallery from "./PhotoGallery";
import ContactUs from "./ContactUs";

const App = () => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ZH" : "EN");
  };

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
                <Nav.Link as={Link} to="/">{language === "EN" ? "HOME" : "主页"}</Nav.Link>
                <Nav.Link as={Link} to="/about">{language === "EN" ? "ABOUT US" : "关于我们"}</Nav.Link>
                <Nav.Link as={Link} to="/classes">{language === "EN" ? "CLASSES" : "课程"}</Nav.Link>
                <Nav.Link as={Link} to="/register">{language === "EN" ? "REGISTER" : "报名"}</Nav.Link>
                <Nav.Link as={Link} to="/photo-gallery">{language === "EN" ? "PHOTO GALLERY" : "相册"}</Nav.Link>
                <Nav.Link as={Link} to="/contact">{language === "EN" ? "CONTACT US" : "联系我们"}</Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="language-toggle">
                    {language === "EN" ? "English" : "中文"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={toggleLanguage}>{language === "EN" ? "中文" : "English"}</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<AboutUs language={language} />} />
          <Route path="/classes" element={<Classes language={language} />} />
          <Route path="/register" element={<Register language={language} />} />
          <Route path="/photo-gallery" element={<PhotoGallery language={language} />} />
          <Route path="/contact" element={<ContactUs language={language} />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
