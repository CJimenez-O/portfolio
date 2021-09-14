import React from "react";
import styled from "styled-components";
import ProjectLeft from "./ProjectDisplayLeft";
import ProjectRight from "./ProductDisplayRight";
import ProjectCard from "./ProjectCard";

function Porjects() {
	return (
		<Container id="projects">
			<div className="project">
				<h4 className="project-title">Projects</h4>
				<p className="project-sub-title">View My Latest Works</p>
			</div>

			<div className="projects">
				<ProjectCard
					image={window.location.origin + "/imgs/nzxt.png"}
					title="NZXT-ECOMMERCE-CLONE"
					info="  This is a fully functioning e-commerce clone of NZXT.com.I was able to recreate this e-commerce from scratch. Using Redux to dispatch actions like adding items to your cart or changing from section to section in the responsive navbar."
					repo="https://github.com/CJimenez-O/nzxt-clone"
					link="https://nzxt-clone.netlify.app/"
					tech="React, Redux, Javascript, Stripe, ES6, AuthO, Styled Components, HTML, CSS"
				/>
				<ProjectCard
					image={window.location.origin + "/imgs/facebook.png"}
					title="The-Facebook-Clone"
					info="Cloned Facebooks web app. I implimented firebase to create the feed functionality I gathered the values inputed and store them into firebases database then render the posts in chronological order."
					repo="https://github.com/CJimenez-O/facebook-clone"
					link="https://facebook-clone-project.netlify.app/"
					tech="React, Javascript, Firebase, HTML, CSS, Material.ui"
				/>
			</div>

			<div className="projects">
				<ProjectCard
					image={window.location.origin + "/imgs/market.png"}
					title="Stock Market News and Simulation"
					info="This website was inspired by The New York Times and Think or Swim. Using Yahoos API I was able to collect information like news and prices about Cryptocurrencies and the stock market. With Yahoos API, I was also able to create a trading simulation that collects your positions and profit loss when sold. 
 "
					link="https://themarketsview.com"
					repo={""}
					tech="JavaScript, ES6, HTML, CSS, Firebase,Yahoo API, Chart.js"
				/>
				<ProjectCard
					image={window.location.origin + "/imgs/spek-repair.png"}
					title="Spek Repair E-commerce"
					info="Needing to authenticate my side business, I needed to create a website displaying my services and future products for sale. This does have a fully functional cart system but does not take payments. If you need any macbooks repaired I am your guy! "
					link="https://spekrepair.com"
					repo="https://github.com/CJimenez-O/spekrepair"
					tech="Javascript, HTML, CSS, ES6"
				/>
			</div>

			<img
				className="wave"
				alt="wave"
				src={window.location.origin + "/imgs/wave-inverse.png"}
			></img>
		</Container>
	);
}

const Container = styled.div`
	align-items: center;
	justify-content: center;
	background-color: #f7f7f7;
	.projects {
		display: flex;
		gap: 50px;
		justify-content: space-evenly;
		margin: 0 5%;
	}
	.project {
		text-align: center;
	}
	.project-title {
		font-size: 45px;
		border-bottom: 1px solid #03cffc;
		margin-left: 30%;
		margin-right: 30%;
	}
	.react {
		margin-top: 50px;
		font-size: 35px;
		text-align: center;
	}

	.wave {
		margin-top: 100px;
		margin-bottom: -20px;
		width: 100%;
	}

	@media (max-width: 890px) {
		.projects {
			display: block;
		}
	}
`;

export default Porjects;
