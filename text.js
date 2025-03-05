import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ language }) => {
  return (
    
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="text-center">
          <h1>Surrey Racquet Club</h1>
          <h2>SRC</h2>
        </Container>

        {/* About Us Section */}
        <Container className="about-section">
          <h3>ABOUT US</h3>
          <p>
            Welcome to Surrey Racquet Club (SRC)! We offer quality classes for
            all skill levels, from beginners to competitive players. To ensure
            the best learning experience, we keep classes small and ensure that
            students are grouped by skill level. We offer free trial sessions
            to help you get to know us and allow our coaches to assess each
            student. Join us in a supportive and focused environment—we look
            forward to welcoming you at SRC!
          </p>
          <Button>Click Here for FREE Trial Class</Button>
        </Container>
      </div>

      {/* Upcoming Promotions Section */}
      <Container className="promotions-section text-center py-5">
        <h2 className="fw-bold">UPCOMING PROMOTIONS</h2>
        <p>🌟 <strong>FREE Trial Classes & Assessments:</strong> Starting March, all trial classes and assessments will be <strong>FREE!</strong></p>
        <p>🌟 <strong>Referral Program:</strong> Current students, refer a friend and both of you enjoy a <strong>10% DISCOUNT</strong> for one term (3 months).</p>
        <p>🌟 <strong>Court Rental:</strong></p>
        <ul>
          <li>Wednesdays: 5pm-9pm @ Star of the Sea Catholic School</li>
          <li>Fridays: 5pm-7pm & 8pm-9pm @ Ocean Cliff Elementary School</li>
          <li>Special Offer: Enjoy a <strong>Discounted Rate</strong> for court rentals when you book multiple sessions!</li>
        </ul>
        <p>Join us now, enjoy learning with friends, and save on tuition fees! Spots are limited, so act fast. 🎾</p>
        <p>For more details on pricing, contact our organizers. We look forward to having you with us!</p>
      </Container>

      {/* Contact Section */}
      <Container className="contact-section text-center py-5">
        <h4 className="fw-bold">Have questions or need more information?</h4>
        <p className="fw-bold">Get in touch with Surrey Racquet Club's friendly team for assistance.</p>
        <Button variant="primary">Contact us</Button>
      </Container>
    </>
   
  );
};

export default Home;