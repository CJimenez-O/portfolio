import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";

function navbar() {
  const logo = '<CJ>'
  return (
    <Navbar>
      <div> <p className='logo'> {logo} </p> </div>
      <div>
        <ul className='links'>
          <li>
          <Link className='link' style={{textDecoration:'none'}}>About</Link>
          </li>
          <li>
          <Link className='link' style={{textDecoration:'none'}}>Projects</Link>
          </li>
          <li>
          <Link className='link' style={{textDecoration:'none'}}>Contact</Link>
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
  padding: 10px 5%;
  background-color: #000;
  border-bottom: 1px solid black;

  .logo{
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
    cursor: pointer;
  }
  .logo:hover{
    color: orange;
  }

  .links{
      display: flex;
      gap: 20px;
      list-style-type: none;
      color: white;
      font-size: 16px;
  }

  .link{
      color: white;
      letter-spacing: 1px;
  }

  .link:hover{
    color: orange;
  }
`;

export default navbar;
