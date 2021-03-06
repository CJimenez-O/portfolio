import React from "react";
import styled from "styled-components";

function ProjectDisplayRight({ image, title, info,repo, link, tech }) {
  return (
    <Container>
      <div className="project-info">
        <h3 className="website-title">{title}</h3>
        <p className='tech'>Technologies: {tech}</p>
        <p className="project-info">{info}</p>
      </div>
      <div className="project-image">
        <img className="website" src={image} alt='project'></img>
        <div className="buttons">
          <a href={link} className="view btn" style={{textDecoration: 'none'}}>View</a>
          <a href={repo} className="code btn" style={{textDecoration: 'none'}}>{repo ? 'Code' : 'Private'}</a>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  margin: 100px 0;
  display: flex;
  gap: 50px;
  padding: 0 10%;

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
  .tech{
    margin-top: 10px;
    margin-bottom: 10px;
    color: #787878;
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
  @media(max-width: 1190px){
    display: block;
    .website-title{
      margin: 10px 0;
    }
    .project-info{
      margin-bottom: 10px;
    }
    .website{
      display: block;
      height: unset;
      margin: auto;
    }
    .buttons{
      margin-top: 10px;
      font-size: 12px;
      width: unset;
      align-items: center;
      justify-content: center;
    }
  }

  @media(max-width: 790px){
    .website{
      max-width: 400px;
    }
  }

  @media(max-width: 690px){
    .website{
      max-width: 250px;
    }
  }
`;
export default ProjectDisplayRight;
