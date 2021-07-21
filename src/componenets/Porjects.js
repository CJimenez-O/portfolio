import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectLeft from "./ProjectDisplayLeft";
import ProjectRight from "./ProductDisplayRight";

function Porjects() {
  return (
    <Container>
      <div className="project">
        <h4 className="project-title">Projects</h4>
        <p className="project-sub-title">View My Latest Works</p>
      </div>
      <h3 className="react">React</h3>
      <ProjectLeft
        image={window.location.origin + "/imgs/nzxt.png"}
        title="NZXT-CLONE"
        info="  This project is a e-commerce clone of the NZXT computer
    components company. Built with; react.js, redux, styled components,
    stripe and AuthO I was able to recreate this e-commerce from scratch.
 "
      />
      <ProjectRight
        image={window.location.origin + "/imgs/nzxt.png"}
        title="NZXT-CLONE"
        info="  This project is a e-commerce clone of the NZXT computer
 components company. Built with; react.js, redux, styled components,
 stripe and AuthO I was able to recreate this e-commerce from scratch.
"
      />
      <h3 className="react">Javascript</h3>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  background-color:#e6e6e6 ;
  .project {
    text-align: center;
  }
  .project-title {
    font-size: 45px;
    border-bottom: 1px solid orange;
    margin-left: 30%;
    margin-right: 30%;
  }
  .react {
    margin-top: 50px;
    font-size: 35px;
    text-align: center;
  }
`;

export default Porjects;
