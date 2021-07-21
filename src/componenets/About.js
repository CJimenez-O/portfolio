import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function About() {
  return (
    <AboutContainer>
      <div className="about-title">
        <h3>Personal Info</h3>
        <p>Get to know about more about me</p>
      </div>
      <div className="flex info-container">
        <div className="info">
        <h4 className='skill-title'>About Me</h4>
          <div className='about-container'>
          <p className='about-msg'>
            Hello, during my coding journey I have stayed humble and passionate about
            front-end developement. Even thorugh the tough bugs and rapid changes it still excites me when I convert ideas to
            reality, solving difficult problems and documenting my journey along the way.
          </p>
          <p className='contact-me'> I would love to hear about any feedback, projects or job opportunities! 
          </p>
          </div>
        </div>
        <div className="skills">
          <h4 className='skill-title'>Skills</h4>
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
    margin: 20px 0;
  }

  .flex {
    display: flex;
    gap: 10px;
    margin: 0 10%;
    margin-bottom: 50px;
    justify-content: center;
  }

  .info {
     min-width: 500px;
     max-width: 500px;
  }
  .about-container{
    border: 2px solid black;
    padding: 20px 60px;
    border-radius: 10px;
  }
  .about-msg{
      margin-bottom: 30px
  }


  .skill-title{
      text-align: center;
      margin-bottom: 10px;
  }
  .skill-lists {
    display: flex;
    gap: 50px;
    border: 2px solid black;
    padding: 20px 60px;
    border-radius: 10px;
    height: 244px;
  }
  .skill-list{
      list-style-type: none;
  }
  .skill-list li{
      background-color: lightgray;
      margin-bottom: 10px;
      text-align: center;
      padding: 5px 10px;
      border-radius: 5px;
  }
`;

export default About;
