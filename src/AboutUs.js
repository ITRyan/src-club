import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const AboutUs = ({ language }) => (
  <>
    {/* About Us Section */}
    <div className="about-hero-section">
      <Container className="text-center text-white">
        <h2 className="fw-bold">{language === "EN" ? "About Us" : "关于我们"}</h2>
      </Container>
    </div>
    {/* Mission & Vision Section */}
    <Container className="mission-vision-section py-5">
      <Row>
        <Col md={6} className="text-center px-4">
          <h3 className="fw-bold">{language === "EN" ? "Our Mission" : "我们的使命"}</h3>
          <p>{language === "EN" ? `To make badminton accessible and enjoyable for everyone in the South
            Surrey area by providing high-quality, inclusive training programs
            for all skill levels—from casual players to competitive athletes.
            Through passionate coaching, a supportive community, and a
            commitment to excellence, we aim to empower students to grow
            physically, mentally, and socially through the sport of badminton.` : `我们的使命是通过提供高质量、包容性的培训项目，让南素里地区的每个人都能接触并享受羽毛球运动，无论其技能水平如何——从休闲玩家到竞技运动员。通过充满激情的教学、支持性的社区以及对卓越的承诺，我们致力于帮助学生在羽毛球运动中实现身体、心理和社交上的全面成长。`}
            
          </p>
        </Col>
        <Col md={6} className="text-center px-4">
          <h3 className="fw-bold">{language === "EN" ? "Our Vision" : "我们的愿景"}</h3>
          <p>
  {language === "EN"
    ? `To become the leading badminton community in South Surrey, inspiring a lifelong love for the sport 
       by breaking down barriers to access and creating opportunities for players of all ages and abilities to thrive. 
       We envision a future where every student in South Surrey has the chance to discover their potential, 
       build confidence, and connect with others through the joy of badminton.`
    : `我们的愿景是成为南素里地区领先的羽毛球社区，通过消除参与障碍并为所有年龄和能力的球员创造发展机会，
       激发人们对这项运动的终身热爱。我们憧憬一个未来，让南素里的每位学生都有机会通过羽毛球的乐趣发现自己的潜力，
       建立自信并与他人建立联系。`}
</p>

        </Col>
      </Row>
    </Container>
  </>
);

export default AboutUs;