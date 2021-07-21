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
        title="NZXT-ECOMMERCE-CLONE"
        info="  This is a fully functioning e-commerce clone of NZXT.com. Built with; react.js, redux, styled components,
    stripe and AuthO I was able to recreate this e-commerce from scratch. Using Redux to dispatch actions like adding items to your cart or changing from section to section in the responsive navbar.
 "
      />
      <ProjectRight
        image={window.location.origin + "/imgs/facebook.png"}
        title="The-Facebook-Clone"
        info="Cloned Facebooks web app using React, Material.ui, and for user auth. I implimented firebase. To create the feed functionality I gathered the values inputed and store them into firebases database then render the posts chronological order."
      />
      <h3 className="react">Javascript</h3>
      <ProjectLeft
        image={window.location.origin + "/imgs/market.png"}
        title="Stock Market News and Simulation"
        info="This website was inspired by The New York Times and Think or Swim. Using Yahoos API I was able to collect information like news and prices about Cryptocurrencies and the stock market. Using this I was also able to create a trading simulation that collects your positions and profit loss when sold. 
 "
      />
      <ProjectRight
        image={window.location.origin + "/imgs/spek-repair.png"}
        title="Spek Repair E-commerce"
        info="Needing to authenticate my side company I needed to create a website displaying my services and future products for sale. This does have a fully functional cart system but does not take payments. If you need any macbooks repaired I am your guy! "
      />
      <ProjectLeft
        image={window.location.origin + "/imgs/express.png"}
        title="Express: Ticket Tracking & Creating"
        info="Using Javascript, HTML, CSS, Firebase and Chart.js I was able to construct a ticket tracking and creation web app to help me with my repairs. I aquire the inputs from the ticket creation, store it in firebase and render when data is needed. Also was able to calculate store performance with transactions."
      />
      
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  background-color:#f7f7f7;
  padding-bottom: 50px;
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
