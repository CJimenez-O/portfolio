import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProjectDisplayLeft({image, title, info}) {
  return (
    <Container>
      <div className="project-image">
        <img
          className="website"
          src={image}
        ></img>
        <div className="buttons">
          <a className="view btn">View</a>
          <a className="code btn">Code</a>
        </div>
      </div>
      <div className="project-info">
        <h3 className="website-title">{title}</h3>
        <p className="projuect-info">
        {info}</p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 50px;

  .website {
    height: 350px;
    border-radius: 5px;
    max-width: 650px;
  }
  .buttons {
    margin: auto;
    width: 30%;
    display: flex;
    gap: 20px;
  }
  .view {
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid black;
  }
  .code {
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid black;
  }

  .btn:hover {
    background-color: white;
    color: orange;
    border: 1px solid black;
  }
  .website-title{
    text-align: center;
      margin-top: 60px;
      margin-bottom: 20px;
      border-bottom: 1px solid orange;
      margin-right: 30%;
  }
`;
export default ProjectDisplayLeft;
