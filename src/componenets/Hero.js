import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

function Hero() {
	return (
		<HeroDiv>
			<div className="hero-text">
				<h1 className="title-name">Christopher Jimenez</h1>
				<h3 className="title-role">Front-end Developer</h3>
				<div className="hero-links">
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={-50}
						duration={1000}
						style={{ textDecoration: "none" }}
						className="about"
					>
						About Me
					</Link>
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-50}
						duration={1000}
						style={{ textDecoration: "none" }}
						className="about"
					>
						Projects
					</Link>
				</div>
			</div>
		</HeroDiv>
	);
}

const HeroDiv = styled.div`
	background: url("https://wallpaperforu.com/wp-content/uploads/2020/08/space-wallpaper-20082314113712.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 700px;
	text-align: center;
	align-items: center;

	.hero-text {
		padding-top: 200px;
	}

	.title-name {
		color: white;
		letter-spacing: 1px;
	}

	.title-role {
		color: white;
		letter-spacing: 1px;
	}

	.hero-links {
		margin-top: 15px;
	}

	.about {
		margin-top: 10px;
		padding: 5px 10px;
		border-radius: 10px;
		border: 2px solid white;
		color: #03cffc;
		font-weight: 600;
		letter-spacing: 2px;
		cursor: pointer;
		background-color: transparent;
		margin-right: 5px;
		font-size: 14px;
	}

	.about:hover {
		background-color: #03cffc;
		color: white;
		border: 2px solid #03cffc;
	}
`;

export default Hero;
