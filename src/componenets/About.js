import React from "react";
import styled from "styled-components";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function About() {
	return (
		<AboutContainer id="about">
			<div className="about-title">
				<h3 className="personal">Personal Info</h3>
				<p className="me">Get to know more about me</p>
			</div>
			<div className="flex info-container">
				<div className="info">
					<div className="about-container">
						<p className="about-msg">
							Hello, during my coding journey I have stayed humble and
							passionate about front-end developement. Even through the tough
							bugs and rapid changes, it still excites me when I convert ideas
							to reality, solving difficult problems and documenting my journey
							along the way. If I am not coding you will likely see me either
							bowling, playing basketball, paintballing, or gaming!
						</p>
						<p className="contact-me">
							I would love to hear about any feedback, projects or job
							opportunities!
						</p>
						<div className="resume-section">
							<a
								className="resume-button"
								href="resume.png"
								download="Resume.png"
							>
								<span className="download-icon">
									<HiOutlineDocumentDownload />
								</span>
								Download Resume
							</a>
						</div>
					</div>
				</div>
				<div>
					<img
						className="about-img"
						alt="illustration"
						src={window.location.origin + "/imgs/illustration.png"}
					></img>
				</div>
			</div>
			<div className="about-title">
				<h3 className="personal">Technical Skills</h3>
				<p className="me">What I work with, but am not limited to</p>
			</div>
			<div className="skills">
				<div className="skill-lists">
					<div>
						<h3>Styling</h3>
						<ul className="skill-list">
							<li>HTML</li>
							<li>CSS</li>
							<li>SASS</li>
							<li>Material.ui</li>
							<li>Bootstrap</li>
						</ul>
					</div>

					<div>
						<h3>Frontend</h3>
						<ul className="skill-list">
							<li>Javascript</li>
							<li>Typescript</li>
							<li>React</li>
							<li>Redux</li>
							<li>ES6</li>
						</ul>
					</div>
					<div>
						<h3>Backend</h3>
						<ul className="skill-list">
							<li>Node.js</li>
							<li>Express</li>
							<li>Puppeteer</li>
							<li>Firebase</li>
							<li>SQL</li>
							<li>Git</li>
						</ul>
					</div>
				</div>
			</div>
			<img
				className="wave"
				alt="wave"
				src={window.location.origin + "/imgs/wave.png"}
			></img>
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
		gap: 50px;
		margin: 0 10%;
		justify-content: center;
	}

	.info {
		min-width: 100px;
		max-width: 500px;
	}
	.about-container {
		min-height: 300px;
		padding: 20px 20px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(182, 182, 182, 0.75);
	}
	.about-msg {
		margin-bottom: 30px;
	}

	.about-img {
		height: 400px;
		width: 400px;
	}

	.resume-section {
		margin-top: 10px;
		justify-content: center;
		display: grid;
	}

	.download-icon {
		position: relative;
		top: 2px;
		margin-right: 5px;
	}

	.resume-button {
		text-decoration: none;
		color: #000;
		padding: 10px 15px;
		border: 1px solid #03cffc;
		border-radius: 5px;
		font-size: 16px;
	}

	.skills {
		display: grid;
		justify-content: center;
		margin-bottom: 100px;
	}
	.skill-lists {
		display: flex;
		gap: 50px;
		padding: 20px 60px;
		border-radius: 10px;
		min-width: 100px;
		max-width: 400px;
		box-shadow: 0 5px 10px rgba(182, 182, 182, 0.75);
		margin-bottom: 50px;
	}

	.skill-list li {
		margin-bottom: 0px;
		padding: 5px 10px;
		border-radius: 5px;
	}

	.wave {
		margin-bottom: -20px;
		width: 100%;
	}

	@media (max-width: 1190px) {
		.flex {
			display: grid;
			margin: 0 10%;
			justify-items: center;
		}
		.skills {
			margin-top: 20px;
			text-align: center;
		}
		.skill-lists {
			padding: 20px 40px;
			min-width: 300px;
		}
		.skill-list {
			font-size: 12px;
			padding: 15px 0px;
		}
	}

	@media (max-width: 790px) {
		.personal {
			font-size: 25px;
			margin: 0 10%;
		}
		.info {
			max-width: 300px;
			font-size: 14px;
		}

		.about-img {
			height: 350px;
			width: 350px;
		}
		.skill-lists {
			max-width: 200px;
			min-width: 200px;
			display: block;
			height: unset;
		}

		.skill-lists {
			margin-bottom: 0px !important;
		}

		.skill-list li {
			margin-bottom: 0px;
		}
	}
`;

export default About;
