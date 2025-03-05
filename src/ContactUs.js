import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactUs = ({ language }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="contact-hero-section">
        <Container className="text-center text-white">
          <h2 className="fw-bold">
            {language === "EN" ? "Contact Us" : "联系我们"}
          </h2>
        </Container>
      </div>

      {/* Contact Info */}
      <Container className="contact-info-section text-center py-5">
        <h4 className="fw-bold">
          {language === "EN"
            ? "Have questions or need more information?"
            : "如有疑问或需了解更多信息？"}
        </h4>
        <p className="fw-bold">
          {language === "EN"
            ? "Get in touch with Surrey Racquet Club's friendly team for assistance."
            : "请联系我们Surrey Racquet Club团队以获取帮助。"}
        </p>

        <Row className="justify-content-center">
          <Col md={3} className="text-center">
            <img src="./images/WC.jpg" alt="WeChat QR Code" className="qr-code" />
            <p>{language === "EN" ? "WeChat" : "WeChat微信: gmkk479"}: gmkk479</p>
          </Col>
          <Col md={3} className="text-center">
            <img src="./images/WS.jpg" alt="WhatsApp QR Code" className="qr-code" />
            <p>{language === "EN" ? "WhatsApp" : "WhatsApp"}: +1(604)727-9628</p>
          </Col>
          <Col md={3} className="text-center">
            <img src="./images/RN.jpg" alt="Red QR Code" className="qr-code" />
            <p>{language === "EN" ? "Red/Xiaohongshu" : "小红书"}: gmkk479</p>
          </Col>
        </Row>

        <p className="mt-4">
          {language === "EN" ? "Email" : "电子邮件"}:{" "}
          <a href="mailto:bmtcoaching@gmail.com">bmtcoaching@gmail.com</a>
        </p>
      </Container>
    </>
  );
};

export default ContactUs;

