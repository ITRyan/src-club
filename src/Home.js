import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ language }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Surrey Racquet Club</h1>
        <h2>SRC</h2>
      </div>

      {/* About Us Section */}
      <Container className="about-section">

        <h3>{language === "EN" ? "About Us" : "关于我们"}</h3>
        <p>
          {language === "EN"
            ? "Welcome to Surrey Racquet Club (SRC)! We offer quality classes for all skill levels, from beginners to competitive players. To ensure the best learning experience, we keep classes small and ensure that students are grouped by skill level. We offer free trial sessions to help you get to know us and allows our coaches to assess each student. Join us in a supportive and focused environment—we look forward to welcoming you at SRC!"
            : "欢迎来到Surrey Racquet Club (SRC)！我们为所有技能水平的学员提供优质课程，从初学者到竞技选手均可参与。为确保最佳学习体验，我们保持小班教学，并根据学员的技能水平进行分组。免费试听课会让您更好地了解我们，同时我们的教练也能为您评估合适的课程级别。加入我们，在一个充满支持与专注的环境中提升自我—我们团队期待在SRC与您相见！"}
        </p>
        <Link to="/register">
          <Button variant="primary">
            {language === "EN" ? "Click Here for FREE Trial Class" : "点击此处免费试课"}
          </Button>
        </Link>
      </Container>

      {/* Upcoming Promotions Section */}
      {/* Upcoming Promotions Section */}
      <Container className="promotions-section text-center py-5 " >
        <h1 className="fw-bold">{language === "EN" ? "PROMOTIONS" : "优惠活动"}</h1>
        <div className="text-start mx-auto" style={{ maxWidth: "800px" }}>
        <br/>
          <ul className="list-unstyled">
            <li>
              🌟 <strong>{language === "EN" ? "FREE Trial Classes & Assessments" : "免费试课与评估"}</strong>:{" "}
              {language === "EN"
                ? "Starting March, all trial classes and assessments will be FREE!"
                : "从三月开始，所有试课和评估免费开放！"}
            </li>
            <br />
            <li>
              🌟 <strong>{language === "EN" ? "Referral Program" : "推荐计划"}</strong>:{" "}
              {language === "EN"
                ? "Current students, refer a friend and both of you enjoy a 10% DISCOUNT for one term (3 months)."
                : "现有学生推荐朋友注册，你们都可以享受一个学期（3个月）10%的折扣！"}
            </li>
            <br />
            <li>
              🌟 <strong>{language === "EN" ? "Court Rental" : "场地出租"}</strong>:
              <ul>
                <li> • {language === "EN" ? "Wednesdays: 5pm-9pm @ Star of the Sea Catholic School" : "周三: 5pm-9pm @ Star of the Sea Catholic School"}</li>
                <li> • {language === "EN" ? "Fridays: 5pm-7pm & 8pm-9pm @ Ocean Cliff Elementary School" : "周五: 5pm-7pm & 8pm-9pm @ Ocean Cliff Elementary School"}</li>
                <li> • {language === "EN" ? "Special Offer" : "特别优惠"}:{language === "EN"
                  ? " Enjoy a Discounted Rate for court rentals when you book multiple sessions!"
                  : "预订多次场地租赁可享受特别折扣！"}</li>
              </ul>
            </li>
              <br/>
              
          </ul>

          <ul>
            <li>
            {language === "EN"
              ? "🏸Join us now, enjoy learning with friends, and save on tuition fees! Spots are limited, so act fast "
              : "🏸立即加入我们，与朋友一起学习，并节省学费！名额有限，尽快行动 "}</li>
          </ul>
          <ul>
            <li>
            {language === "EN"
              ? "For more details on pricing, contact our organizers. We look forward to having you with us!"
              : "更多价格等详情，请联系我们的助理。期待您的加入！"}
              </li>
              </ul>
        </div>
      </Container>


      {/* Contact Section */}
      <Container className="contact-section text-center ">
        <h4 className="fw-bold">{language === "EN" ? "Have questions or need more information?" : "如有疑问或需了解更多信息？"}</h4>
        <p className="fw-bold">{language === "EN" ? "Get in touch with Surrey Racquet Club's friendly team for assistance." : "请联系我们Surrey Racquet Club团队以获取帮助。"}</p>
        <Link to="/contact">
          <Button variant="primary">{language === "EN" ? "Contact Us" : "联系我们"}</Button>
        </Link>
      </Container>
    </>
  );
};

export default Home;
