import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProjectDisplayRight({ image, title, info }) {
  return (
    <Container>
      <div className="project-info">
        <h3 className="website-title">{title}</h3>
        <p className="projuect-info">{info}</p>
      </div>
      <div className="project-image">
        <img className="website" src={image}></img>
        <div className="buttons">
          <a className="view btn">View</a>
          <a className="code btn">Code</a>
        </div>
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
  .website:hover {
    -moz-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    -webkit-box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
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
    color: #03cffc;
    border: 1px solid black;
  }
  .website-title {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    border-bottom: 1px solid #03cffc;
    margin-right: 30%;
  }
`;
export default ProjectDisplayRight;
