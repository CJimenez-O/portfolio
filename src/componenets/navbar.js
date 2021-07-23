import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function navbar() {
  const logo = "<CJ>";
  return (
    <Navbar>
      <div>
        <p className="logo"> {logo} </p>
      </div>
      <div className="link-list">
        <ul className="links">
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              style={{ textDecoration: "none" }}
              className="link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              style={{ textDecoration: "none" }}
              className="link"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              style={{ textDecoration: "none" }}
              className="link"
            >
              Contact
            </Link>
          </li>
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
        </ul>
      </div>
    </Navbar>
  );
}

const Navbar = styled.nav`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  padding: 10px 0px;
  background-color: #000;
  border-bottom: 1px solid black;
  position: fixed;
  width: 100%;
  .logo {
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 30px;
  }
  .logo:hover {
    color: #03cffc;
  }

  .link-list {
    display: flex;
    margin-right: 30px;
  }

  .links {
    display: flex;
    gap: 20px;
    list-style-type: none;
    color: white;
    font-size: 16px;
  }

  .link {
    color: white;
    letter-spacing: 1px;
    cursor: pointer;
  }

  .link:hover {
    color: #03cffc;
  }

  .icons {
    position: relative;
    padding-bottom: -20rem;
  }
`;

export default navbar;
