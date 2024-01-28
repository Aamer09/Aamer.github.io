import React, { useState } from "react";
import pic from "../assets/pic.jpeg";
import leetcal from "../assets/0012.png";
import Type from "./Typewriter";
import Particlesr from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const [skillLevels, setSkillLevels] = useState({
    "React JS": 90,
    "React Native": 90,
    TypeScript: 80,
    JavaScript: 90,
    "C++": 90,
    DSA: 70,
  });
  const [isParticlesInit, setIsParticlesInit] = useState(false);
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section>
      <div>
        <Particlesr onInit={() => setIsParticlesInit(true)} />
      </div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
    <Row style={{ display: "flex", alignItems: "center", marginLeft:"15%" }}>
  <Col md={6} className="home-header">
    <h6 style={{ marginBottom: "-6px" }} className="heading">
      Hi{" "}
      <span
        style={{}}
        className="wave"
        role="img"
        aria-labelledby="wave"
      >
        👋🏻
      </span>
      &nbsp; I'm &nbsp;Aamer,&nbsp;I...
    </h6>
    <div>
      <Type />
    </div>
  </Col>

  <Col md={6} className="image-header">
    <img
      src={pic}
      alt="home pic"
      className="img-fluid"
      style={{
        maxHeight: "180px",
        maxWidth: "180px",
        borderRadius: "50%", // Adjust the border radius for a circular image
      }}
    />
  </Col>
</Row>


          <Container>
            <Col md={4} className="home-header">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "30%", marginTop: "100px" }}>
                  <h2>Skills</h2>
                  <ul
                    className="skills-list"
                    style={{ listStyleType: "none", padding: 0 }}
                  >
                    {Object.keys(skillLevels).map((skill) => (
                      <li
                        key={skill}
                        style={{
                          marginLeft: "90px",
                          marginBottom: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            marginRight: "20px",
                            width: "160px",
                            textAlign: "left",
                            fontSize: "24px",
                          }}
                        >
                          {skill}
                        </span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={skillLevels[skill]}
                          disabled
                          style={{
                            WebkitAppearance: "none",
                            appearance: "none",
                            width: "40%",
                            height: "5px",
                            background: "cyan",
                            outline: "none",
                            opacity: "0.7",
                            transition: "opacity 0.2s",
                          }}
                        />
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: "120px" }}>
                    <h2>Tools I use..?</h2>
                    <ul
                      style={{
                        listStyleType: "none",
                        textAlign: "left",
                        marginLeft: "70px",
                        fontSize: "24px",
                      }}
                    >
                      <li>Xcode</li>
                      <li>Android Studio</li>
                      <li>WebStorm</li>
                      <li>Sublime</li>
                      <li>visual studio code</li>
                      <li>Notion</li>
                      <li>Jira</li>
                    </ul>
                  </div>
                </div>

                <div style={{ width: "50%", padding: "20px" }}>
                  <div style={{ marginBottom: "30px" }}></div>

                  <div
                    style={{ width: "calc(100% - 0px)", padding: "30px 50px" }}
                  >
                    <h2>Experiences</h2>
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        paddingLeft: "80px",
                      }}
                    >
                      <li>
                        <h6
                          style={{
                            fontSize: "16px",
                            marginBottom: "-6px",
                            textAlign: "left",
                          }}
                        >
                          wavemaker Inc - Development Engineer
                          <tr />
                          2023 Jun - Current
                        </h6>
                        <p style={{ fontSize: "16px", textAlign: "left" }}>
                          User Collaborating with the proficient team at
                          WaveMaker, a leading low-code application development
                          platform, enables businesses to streamline the
                          creation of tailored applications. Through its
                          user-friendly interface, the platform facilitates
                          software development with minimal manual coding,
                          fostering accelerated project completion and increased
                          accessibility for non-technical users to work on their
                          own applications.
                        </p>
                      </li>
                      <li>
                        <h6
                          style={{
                            fontSize: "16px",
                            marginBottom: "-6px",
                            textAlign: "left",
                          }}
                        >
                          Arcadis IBI Group - Software developer
                          <tr />
                          2021 Aug - 2023 May
                        </h6>
                        <p style={{ fontSize: "16px", textAlign: "left" }}>
                          Contributed to NSpace, a React Native-based app for
                          hybrid office management. Developed cross-platform
                          features, integrated In-App Review, and managed
                          dependencies for optimal performance. Proficient in
                          Axios for RESTful API integration and expertly
                          incorporated third-party packages. Skilled in React,
                          Redux, TypeScript, and mobile development for Android
                          and iOS.
                        </p>
                      </li>
                      <li>
                        <h6
                          style={{
                            fontSize: "16px",
                            marginBottom: "-6px",
                            textAlign: "left",
                          }}
                        >
                          IBI Group - Software developer Intern
                          <tr />
                          2021 Apr - 2021 Aug
                        </h6>
                        <p style={{ fontSize: "16px", textAlign: "left" }}>
                          Contributed to CURBIQ, a React JS-based web app for
                          curb space management. Responsible for debugging,
                          collaborating with QA, and implementing modern tools
                          like Styled Components and Redux. Proficient in Git
                          and JIRA workflows, emphasizing modular code and
                          Redux-based state management for optimized data flow.
                          Skilled in React, TypeScript, and REST APIs.
                        </p>
                      </li>
                    </ul>
                    <h2>Education</h2>
                    <ul style={{ listStyleType: "none", padding: "0px 80px" }}>
                      <li>
                        <h6
                          style={{
                            fontSize: "16px",
                            marginBottom: "-6px",
                            textAlign: "left",
                          }}
                        >
                          CMR college of Engineering & Technology - BTech computer science
                          <tr />
                          2017 Jun - 2021 Jun
                        </h6>
                        <p style={{ fontSize: "16px", textAlign: "left" }}>
                          Engaged in competitive programming, data structures,
                          cybersecurity, and web development. Leadership role in
                          Cyber Security Club, conducting presentations to 300+
                          members. Organized C programming workshop. Earned
                          HarvardX CS50 certification. Proficient in MongoDB,
                          HTML, CSS, C, C++, JavaScript, and Python. Active
                          participant in coding competitions and hackathons.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Row>
          <Col md={12} className="home-about-social">
            <h1>Wanna work with me?</h1>
            <p>
            I'm currently <span className="purple">available</span> for work.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aamer09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/aamercodes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aamersohail"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <p style={{fontSize: "12px"}}>Copyright © {year} | Aamer Sohail</p>
        </Col>
        </Row>
        </Container>
            {/* <img
                src={leetcal}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "700px",
                  maxWidth: "1000px",
                }}
              /> */}
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
