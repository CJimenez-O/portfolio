import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutContainer id="about">
      <div className="about-title">
        <h3 className="personal">Personal Info</h3>
        <p className="me">Get to know about more about me</p>
      </div>
      <div className="flex info-container">
        <div className="info">
          <h4 className="skill-title">About Me</h4>
          <div className="about-container">
            <p className="about-msg">
              Hello, during my coding journey I have stayed humble and
              passionate about front-end developement. Even through the tough
              bugs and rapid changes it still excites me when I convert ideas to
              reality, solving difficult problems and documenting my journey
              along the way.
            </p>
            <p className="contact-me">
              {" "}
              I would love to hear about any feedback, projects or job
              opportunities!
            </p>
          </div>
        </div>
        <div className="skills">
          <h4 className="skill-title">Skills</h4>
          <div className="skill-lists">
            <ul className="skill-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Material.ui</li>
            </ul>
            <ul className="skill-list">
              <li>Git</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>ES6</li>
            </ul>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Puppeteer</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  align-items: center;
  justify-content: center;

  .about-title {
    text-align: center;
    margin: 50px 0;
  }

  .personal {
    font-size: 45px;
    border-bottom: 1px solid #03cffc;
    margin-left: 30%;
    margin-right: 30%;
  }
  .me {
    margin-top: 10px;
    font-size: 15px;
  }

  .flex {
    display: flex;
    gap: 10px;
    margin: 0 10%;
    margin-bottom: 100px;
    justify-content: center;
  }

  .info {
    min-width: 100px;
    max-width: 500px;
  }
  .about-container {
    background-color: #f7f7f7;
    padding: 20px 20px;
    border-radius: 10px;
    -moz-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    -webkit-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
  }
  .about-msg {
    margin-bottom: 30px;
  }

 
  .skill-lists {
    display: flex;
    gap: 50px;
    background-color: #f7f7f7;
    padding: 20px 60px;
    border-radius: 10px;
    min-width: 100px;
    max-width: 400px;
    -moz-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    -webkit-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    margin-bottom: 50px;
  }

  .skill-list li {
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 5px;
  }

  @media (max-width: 1190px) {
    .flex {
      display: grid;
      margin: 0 10%;
      justify-items: center;
    }
    .skills{
      margin-top: 20px;

    }
    .skill-lists{
      padding: 20px 40px;
    }
    .skill-list{
      font-size: 12px;
      padding: 15px 0px;
    }
  }

  @media (max-width: 790px) {
    .personal{
      font-size: 25px;
      margin: 0 10%;
    }
    margin-bottom: 50px;
    .info{
      max-width: 400px;
      font-size: 14px;
    }
    .skill-lists{
      max-width: 200px;
      display: block;
      height: unset;
    }

    .skill-lists{
      margin-bottom: 0px !important;
    }

    .skill-list li {
    margin-bottom: 0px;
    }
  }
`;

export default About;
