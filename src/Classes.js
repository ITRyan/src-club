import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import FlipCard from "./FlipCard"; // Import FlipCard component
import "./App.css";
import { Link } from "react-router-dom";

const Classes = ({ language }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="classes-hero-section">
        <Container className="text-center text-white">
          <h2 className="fw-bold">{language === "EN" ? "Classes" : "课程"}</h2>
        </Container>
      </div>

      {/* Classes Section */}
      <Container className="classes-section py-5">
        <Row>
          <Col md={4} className="text-center px-5">
            <h4 className="fw-bold" style={{ color: "#002b7a" }} >
              {language === "EN" ? (
                <>
                  2-Hour Group Lesson <br /> (4-6 Students)
                </>
              ) : (
                <>
                  2小时公共团体课<br />（4-6名学生）
                </>

              )}
            </h4>
            <ul className="text-start">
              <li>✔ {language === "EN" ? "Fun & engaging" : "有趣且互动性强"}</li>
              <li>✔ {language === "EN" ? "Game practice & experience" : "比赛练习与经验"}</li>
              <li>✔ {language === "EN" ? "Affordable pricing" : "价格实惠"}</li>
              <li>✔ {language === "EN" ? "Develop interest in badminton" : "培养对羽毛球的兴趣"}</li>
            </ul>
          </Col>
          <Col md={4} className="text-center px-5">
            <h4 className="fw-bold" style={{ color: "#002b7a" }}>
              {language === "EN" ? (
                <>
                  1-Hour Semi-Private Lesson <br /> (2-4 Students)
                </>
              ) : (
                <>
                  1小时半私人课程<br />（2-4名学生）
                </>

              )}
            </h4>
            <ul className="text-start">
              <li>✔ {language === "EN" ? "Fun & engaging" : "有趣且互动性强"}</li>
              <li>✔ {language === "EN" ? "Game practice & experience" : "比赛练习与经验"}</li>
              <li>✔ {language === "EN" ? "Flexible scheduling" : "灵活安排时间"}</li>
              <li>✔ {language === "EN" ? "Small private group with friends" : "与朋友的小型私教课程"}</li>
              <li>✔ {language === "EN" ? "Tailored training" : "定制培训"}</li>
              <li>✔ {language === "EN" ? "Suitable for competitive students" : "适合有比赛打算的学生"}</li>
            </ul>
          </Col>
          <Col md={4} className="text-center px-5">
            <h4 className="fw-bold" style={{ color: "#002b7a" }}>
              {language === "EN" ? (
                <>
                  1-Hour Private Lesson <br /> (1 Student)
                </>
              ) : (
                <>
                  1小时私人课程 <br /> （1名学生）
                </>

              )}
            </h4>
            <ul className="text-start">
              <li>✔ {language === "EN" ? "Targeted training" : "有针对性的培训"}</li>
              <li>✔ {language === "EN" ? "Rapid progress" : "进步快速"}</li>
              <li>✔ {language === "EN" ? "Flexible scheduling" : "灵活安排时间"}</li>
              <li>✔ {language === "EN" ? "Full attention from coach" : "教练全程关注"}</li>
              <li>✔ {language === "EN" ? "Personalized to student progress" : "根据学生程度进行个性化培训"}</li>
              <li>✔ {language === "EN" ? "Immediate feedback & correction" : "即时反馈和纠正"}</li>
              <li>✔ {language === "EN" ? "Suitable for competitive students" : "适合比赛打算的学生"}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Levels Section with Flip Cards */}
      <Container className="levels-section text-center py-5" style={{ background: "#f5f2e9" }}>
        <Row>
          <Col md={6}>
            <FlipCard
              frontText={language === "EN" ? "Fundamentals Level 1" : "基础课程第1阶段"}
              backText={
                language === "EN"
                  ? "This class is for those who are new to the sport — no prior experience required!  Students will learn fundamental skills such as grip, movement and footwork, swing, rules of the game and more. Great for students who are looking to exercise whilst building interest and understanding of badminton in a fun and friendly environment."
                  : "这门课程专为羽毛球运动的新手设计—无需任何经验！学生将学习基本技能，如握拍、移动与步法、挥拍、比赛规则等。非常适合那些希望在有趣且友好的环境中锻炼身体，同时培养对羽毛球的兴趣和理解的学生。"

              }

            />
          </Col>
          <Col md={6}>
            <FlipCard
              frontText={language === "EN" ? "Fundamentals Level 2" : "基础课程第2阶段"}
              backText={
                language === "EN" ? (
                  <>
                    This class is suitable for students who have had limited experience and are looking to build on their foundational skills. 
                    With both individual and group practice, students will get the chance to enhance their overall performance whilst enjoying the social aspect of the sport. <br />
                    (Coach assessment required before joining this class)
                  </>
                ) : (
                  <>
                    这门课程适合那些有一定基础但经验有限，并希望进一步提升基本技能的学生。
                    通过个人和小组练习，学生将有机会在享受羽毛球运动社交乐趣的同时，提高整体表现水平。<br />
                    （加入本课程前需经过教练评估）
                  </>
                )
              }
              

              schedule={{

                title: language === "EN" ? "Fundamentals Level 2 Class Schedule" : "第2阶段基础课程",
                times: [
                  language === "EN"
                    ? "Age 12 - 14 | Friday 5pm - 7pm | Star of the Sea Catholic"
                    : "年龄 12 - 14 | 星期五 5pm - 7pm | Star of the Sea Catholic",
                  language === "EN"
                    ? "Age 8 - 10 | Friday 5pm - 7pm | Ocean Cliff Elementary"
                    : "年龄 8 - 10 | 星期五 5pm - 7pm | Ocean Cliff Elementary",
                  language === "EN"
                    ? "Age 13 - 15 | Friday 5pm - 7pm | Ocean Cliff Elementary"
                    : "年龄 13 - 15 | 星期五 5pm - 7pm | Ocean Cliff Elementary",
                  language === "EN"
                    ? "Age 11 - 12 | Friday 7pm - 9pm | Ocean Cliff Elementary"
                    : "年龄 11 - 12 | 星期五 7pm - 9pm | Ocean Cliff Elementary",
                ],
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <FlipCard
              frontText={language === "EN" ? "Intermediate Level 1" : "提升课程第1阶段"}
              backText={
                language === "EN" ? (
                  <>
                    This class is for players who have a solid understanding of the basics.
                    Intermediate 1 focuses on refining skills and improving consistency in
                    students’ shots, footwork, and game strategy. With a mix of drills and
                    game-based practice, players will gain the confidence to compete at a
                    higher level in a fun and challenging environment. <br />
                    (Coach assessment required before joining this class)
                  </>
                ) : (
                  <>
                    这门课程面向对羽毛球基础有扎实理解的学员。中级1课程着重于精进技能，并提高学员在击球、步法和比赛策略上的稳定性。
                    通过结合技术训练和实战练习，学员将在充满乐趣与挑战的环境中，获得在更高水平比赛中竞争的自信。 <br />
                    （加入本课程前需经过教练评估）
                  </>
                )
              }
              
              
              schedule={{

                title: language === "EN" ? "Fundamentals Level 2 Class Schedule" : "第1阶段提升课程",
                times: [
                  language === "EN"
                    ? "Age 12 - 14 | Friday 5pm - 7pm | Ocean Cliff Elementary"
                    : "年龄 12 - 14 | 星期五 5pm - 7pm | Ocean Cliff Elementary",

                ],
              }}
            />
          </Col>
          <Col md={6}>
            <FlipCard
              frontText={language === "EN" ? "Intermediate Level 2" : "提升课程第2阶段"}
              backText={
                language === "EN" ? (
                  <>
                    This class is suitable for competitive students and focuses on more high-level training and techniques.
                    Students at this level will be able to compete in Junior A / Junior B tournaments. <br />
                    (Coach assessment required before joining this class)
                  </>
                ) : (
                  <>
                    这门课程适合竞技型学员，重点在于更高水平的训练和技巧。
                    此阶段的学员将能够参加青少年A级/B级比赛。<br />
                    （加入本课程前需经过教练评估）
                  </>
                )
              }
              
            />
          </Col>
        </Row>
      </Container>

      {/* Locations & Registration */}
      <Container className="locations-section text-center py-5" style={{ background: "#f5f2e9" }}>
        <Row>
          <Col md={6}>
            <h5>Star of the Sea Catholic School</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18638.318958023043!2d-122.83625234283747!3d49.046708003133546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c4a1c27a84fd%3A0x7fe45f0eca945635!2sStar%20of%20the%20Sea%20Catholic%20School!5e0!3m2!1sen!2sca!4v1740718010745!5m2!1sen!2sca" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
          <Col md={6}>
            <h5>Ocean Cliff Elementary School</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.5579384408525!2d-122.87794872386979!3d49.038014188049466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c32956e0e2c9%3A0x5645675d45123a2b!2sOcean%20Cliff%20Elementary%20School!5e0!3m2!1sen!2sca!4v1740718449931!5m2!1sen!2sca" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Container>

      <Container className="contact-section text-center">
        <h4 className="fw-bold">{language === "EN" ? "Contact us to register for a FREE trial class and courses now!" : "现在联系我们报名免费试听课和课程！"}</h4>
        <p className="mt-4">


          <br />
          <a href="https://forms.gle/mTp4QpqdAHB56QY89">{language === "EN" ? "Click here for a FREE trial class registration " : "免费试听课注册链接!"}</a>
        </p>

        <Link to="/contact">
          <Button variant="primary">{language === "EN" ? "Contact Us" : "联系我们"}</Button>
        </Link>
      </Container>
    </>
  );
};

export default Classes;



