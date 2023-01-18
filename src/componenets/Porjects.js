import React from "react";
import styled from "styled-components";
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
					image={window.location.origin + "/imgs/nzxt-mockup.png"}
					title="NZXT-CLONE"
					info="  This is a fully functioning e-commerce clone of NZXT.com.I was able to recreate this e-commerce from scratch. Using Redux to dispatch actions like adding items to your cart or changing from section to section in the responsive navbar."
					repo="https://github.com/CJimenez-O/nzxt-clone"
					link="https://nzxt-clone.netlify.app/"
					tech="React, Redux, Javascript, Stripe, ES6, AuthO, Styled Components, HTML, CSS"
				/>
				<ProjectCard
					image={window.location.origin + "/imgs/foodOasis.png"}
					title="Food Oasis"
					info="Focused on individuals seeking food in Los Angeles who need an up-to-date resource about food pantries and meals. I helped the team by performing code reviews and collaborated with designers using Kanban to distribute tasks."
					repo=""
					link="https://foodoasis.la/organizations"
					tech="React, Javascript, ES6+, HTML, CSS, Material-UI"
				/>
			</div>

			<div className="projects">
				<ProjectCard
					image={window.location.origin + "/imgs/reticle.png"}
					title="Stock Market Dashboard"
					info="This website was inspired by TD Ameritrades Think or Swim. Using Yahoos API I was able to collect information like news and prices about Cryptocurrencies and the stock market.
 "
					link="https://regal-strudel-353fb7.netlify.app/pages/analytics.html"
					repo={""}
					tech="JavaScript, ES6, HTML, CSS,Yahoo API, Chart.js"
				/>
				<ProjectCard
					image={window.location.origin + "/imgs/sr-mockup.png"}
					title="Spek Repair"
					info="Needing to authenticate my side business, I needed to create a website displaying my services and future products for sale. This does have a fully functional cart system but does not take payments. Also a form section for mail in repairs that gets sent to admin email and the user recieves a invoice within 24hrs. If you need any macbooks repaired I am your guy! "
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
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
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
		text-align: center;
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
		.project-title {
			font-size: 30px;
		}
	}
`;

export default Porjects;
