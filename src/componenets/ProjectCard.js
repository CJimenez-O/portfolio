import React from "react";
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, image, info, tech, repo, link }) {
	return (
		<Container>
			<p className="project-card-title">{title}</p>
			<img className="project-image" src={image} alt={title}></img>
			<p className="project-info">{info}</p>
			<h4 className="tech-title">Technologies:</h4>
			<p class="project-tech">{tech}</p>
			<div className="btns">
				<a href={repo} className="button-link">
					<span className="icon">
						<FiGithub />
					</span>
					Github
				</a>
				<a href={link} className="button-link">
					<span className="icon">
						<FaExternalLinkAlt />
					</span>
					Website
				</a>
			</div>
		</Container>
	);
}

const Container = styled.div`
	background-color: white;
	display: grid;
	margin-top: 100px;
	padding: 20px 50px;
	justify-content: center;
	border-radius: 5px;
	box-shadow: 0 0 10px gray;
	margin-bottom: 20px;
	.project-image {
		width: 100%;
		max-width: 800px;
		margin: 10px auto;
		display: block;
		object-fit: cover;
		object-position: center center;
	}
	.project-card-title {
		text-align: center;
		font-size: 20px;
		margin-bottom: 20px;
		border-bottom: 2px solid #03cffc;
	}
	.project-info {
		margin: 10px 0;
	}
	.project-tech {
		color: gray;
	}

	.btns {
		margin: 15px;
		display: flex;
		justify-content: space-evenly;
	}
	.button-link {
		text-align: center;
		border: 2px solid #03cffc;
		padding: 2% 4%;
		width: 90px;
		height: 25px;
		border-radius: 5px;
		cursor: pointer;
		text-decoration: none;
		color: black;
	}

	.icon {
		margin-right: 5px;
	}

	@media (max-width: 690px) {
		.btns {
			gap: 5px;
		}
		.button-link {
			height: unset;
			font-size: 13px;
		}
	}
`;

export default ProjectCard;
