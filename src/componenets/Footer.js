import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function Footer() {
	return (
		<Container>
			<ul className="footer-links">
				<li>
					<a
						href="https://github.com/CJimenez-O"
						className="link icons"
						style={{ textDecoration: "none" }}
					>
						<FaGithub />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/christopher-jimenez-a44681217/"
						className="link icons"
						style={{ textDecoration: "none" }}
					>
						<FaLinkedin />
					</a>
				</li>
				<li>
					<a className="resume-button" href="resume.png" download="Resume.png">
						<HiOutlineDocumentDownload />
					</a>
				</li>
			</ul>
			<p className="location">
				<span className="map-icon">
					<FaMapMarkerAlt />
				</span>{" "}
				Southern California
			</p>
			<p className="legal">© Christopher Jimenez 2021</p>
		</Container>
	);
}
const Container = styled.div`
	display: grid;
	justify-content: center;
	background-color: #f7f7f7;
	padding: 30px 0;

	.footer-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		list-style: none;
	}

	.footer-links li {
		padding: 1px 5px;
		border-radius: 50%;
		border: 1px solid gray;
	}

	.icons {
		color: gray;
		position: relative;
		top: 2px;
	}

	.map-icon {
		color: gray;
	}

	.resume-button {
		text-decoration: none;
		color: gray;
		position: relative;
		top: 2px;
	}
	.location {
		text-align: center;
		margin: 5px 0;
		color: gray;
	}

	.legal {
		color: gray;
	}
`;
export default Footer;
