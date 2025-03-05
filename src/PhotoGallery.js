import React from "react";
import { Button, Container, Carousel } from "react-bootstrap";
import "./App.css";
import { Link } from "react-router-dom";

const PhotoGallery = ({ language }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="photo-gallery-hero">
        <Container className="text-center text-white">
          <h2 className="fw-bold">
            {language === "EN" ? "Photo Gallery" : "照片"}
          </h2>
        </Container>
      </div>

      {/* ✅ Bootstrap Carousel */}
      <Container className="my-5" style={{ background: "#f5f2e9" }}>
        <Carousel interval={3000} indicators={true} controls={true}>
          <Carousel.Item>
            <img className="d-block w-100" src={"./images/SRC1.jpg"} alt="Badminton Player 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={"./images/SRC2.jpg"} alt="Badminton Player 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={"./images/SRC3.jpg"} alt="Badminton Player 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={"./images/SRC4.jpg"} alt="Badminton Player 4" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={"./images/SRC5.jpg"} alt="Badminton Player 5" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={"./images/SRC6.jpg"} alt="Badminton Player 6" />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Contact Section */}
      <Container className="contact-section text-center py-5" >
        <h4 className="fw-bold">
          {language === "EN" ? "Have questions or need more information?" : "有问题或需要更多信息？"}
        </h4>
        <p className="fw-bold">
          {language === "EN"
            ? "Get in touch with Surrey Racquet Club's friendly team for assistance."
            : "请联系Surrey Racquet Club的团队获取帮助。"}
        </p>
        <Link to="/contact">
          <Button variant="primary">{language === "EN" ? "Contact Us" : "联系我们"}</Button>
        </Link>
      </Container>
    </>
  );
};

export default PhotoGallery;
