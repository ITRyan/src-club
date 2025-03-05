import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = ({ language }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="register-hero-section">
        <Container className="text-center text-white">
          <h2 className="fw-bold">{language === "EN" ? "Register" : "报名"}</h2>
        </Container>
      </div>

      {/* Schedule Section */}
      <Container className="schedule-section py-5">
        <Row className="align-items-start">
          <Col md={6} className="text-center">
            <h3 className="fw-bold">{language === "EN" ? "Wednesday" : "星期三"}</h3>
            <p>{language === "EN" ? "Group Lesson" : "公共团体课"}</p>
            <p>
              {language === "EN"
                ? "Fundamental Level 2 | Age 12 - 14 | 5pm - 7pm"
                : "基础课程第2阶段 | 12 - 14岁 | 5pm - 7pm"}
            </p>
            <p><br/></p>
            <p><br/></p>
            <p><br/></p>
            <h5>{language === "EN" ? "Star of the Sea Catholic School" : "Star of the Sea Catholic School"}</h5>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18638.318958023043!2d-122.83625234283747!3d49.046708003133546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c4a1c27a84fd%3A0x7fe45f0eca945635!2sStar%20of%20the%20Sea%20Catholic%20School!5e0!3m2!1sen!2sca!4v1740718010745!5m2!1sen!2sca"
                title="Star of the Sea Catholic School"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <h3 className="fw-bold">{language === "EN" ? "Friday" : "星期五"}</h3>
            <p>{language === "EN" ? "Group Lesson" : "公共团体课"}</p>
            <p>
              {language === "EN"
                ? "Fundamental Level 2 | Age 8 - 10 | 5pm - 7pm"
                : "基础课程第2阶段 |   8 - 10岁 | 5pm - 7pm"}
            </p>
            <p>
              {language === "EN"
                ? "Fundamental Level 2 | Age 13 - 15 | 5pm - 7pm"
                : "基础课程第2阶段 | 13 - 15岁 | 5pm - 7pm"}
            </p>
            <p>
              {language === "EN"
                ? "Fundamental Level 2 | Age 11 - 12 | 7pm - 9pm"
                : "基础课程第2阶段 | 11 - 12岁 | 7pm - 9pm"}
            </p>
            <p>
              {language === "EN"
                ? "Intermediate Level 1 | Age 12 - 14 | 7pm - 9pm"
                : "提升课程第1阶段  | 12 - 14岁 | 7pm - 9pm"}
            </p>
            <h5>{language === "EN" ? "Ocean Cliff Elementary School" : "Ocean Cliff Elementary School"}</h5>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.5579384408525!2d-122.87794872386979!3d49.038014188049466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c32956e0e2c9%3A0x5645675d45123a2b!2sOcean%20Cliff%20Elementary%20School!5e0!3m2!1sen!2sca!4v1740718449931!5m2!1sen!2sca"
                title="Ocean Cliff Elementary School"
                width="400"
                height="302"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Registration Info Section */}
      <Container className="registration-info text-center py-5" style={{ background: "#f5f2e9" }}>

        <h4 className="fw-bold">
          {language === "EN"
            ? "Contact us to register for a FREE trial class and courses now!"
            : "立即联系我们报名免费试听课和课程！"}
        </h4>
        <p>
          {language === "EN" ? "Free Trial Class Registration:" : "免费试课报名："}{" "}
          <a href="https://forms.gle/mTp4QpqdAHB56QY89">{language === "EN"
            ? "Click here"
            : "点击这里"}</a>
        </p>
        <Link to="/contact">
          <Button variant="primary">{language === "EN" ? "Contact Us" : "联系我们"}</Button>
        </Link>
      </Container>

      {/* Registration Policy Section */}
      <Container className="registration-policy text-center py-5" style={{ background: "#f5f2e9" }}>
  <h4 className="fw-bold">
    {language === "EN"
      ? "Surrey Racquet Club Course Registration Policy"
      : "Surrey Racquet Club课程报名政策"}
  </h4>

  {/* Center the block, but align text inside to the left */}
  <div className="text-start mx-auto" style={{ maxWidth: "800px" }}>
    <p>
      <strong>1.</strong>{" "}
      {language === "EN"
        ? "Payment Method: Cash or E-transfer is accepted. This payment is NON REFUNDABLE."
        : "付款方式接受现金或emt。此款项一经支付，恕不退还。"}
    </p>
    <p>
      <strong>2.</strong>{" "}
      {language === "EN"
        ? "Registration will be available on a term-by-term basis (term = 3-month period, e.g., Jan-March). Payment is due 2 weeks prior to the start of each term."
        : "注册按学期进行（每学期为3个月，例如1月至3月）。每学期的费用需在学期开始前两周支付。"}
    </p>
    <p>
      <strong>3.</strong>{" "}
      {language === "EN"
        ? "48h notice is required for any class cancellations."
        : "如需取消课程，需提前 48 小时通知。"}
    </p>
    <p>
      <strong>4.</strong>{" "}
      {language === "EN"
        ? "Each student is entitled to 2 credits per term, meaning that 2 missed classes can be rescheduled to the following term (preferably with 48h notice)."
        : "每位学员每学期享有2次补课机会，即2次缺席的课程可以安排到下一期补上(建议提前48小时通知)。"}
    </p>
    <p>
      <strong>5.</strong>{" "}
      {language === "EN"
        ? "If a cancellation is made after the class has started, a credit will NOT be applied."
        : "如果课程开始后取消，将不会获得补课机会。"}
    </p>
  </div>
</Container>

    </>
  );
};

export default Register;
