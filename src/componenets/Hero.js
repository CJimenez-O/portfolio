import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";


function Hero() {
    return (
        <HeroDiv>
            <div className='hero-text'>
                <h1 className='title-name'>Christopher Jimenez</h1>
                <h3 className='title-role'>Front-end Developer</h3>
                <button className='about'>My Skills</button>
                <button className='about'>Projects</button>
            </div>
        </HeroDiv>
    )
}

const HeroDiv = styled.div`
 background: url('https://wallpaperforu.com/wp-content/uploads/2020/08/space-wallpaper-20082314113712.jpg');
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover; 
 height: 700px;
 text-align: center;
 align-items: center;

 .hero-text{
     padding-top:200px;
     
 }

 .title-name{
    color: white;
    letter-spacing: 1px;
 }

 .title-role{
     color: white;
     letter-spacing: 1px;
 }

 .about{
     margin-top: 10px;
     padding: 5px 10px;
     border-radius: 10px;
     border: 2px solid white;
     color: orange;
     font-weight: 600;
     letter-spacing: 2px;
     cursor: pointer;
     background-color: transparent;
     margin-right: 5px
 }

 .about:hover{
     background-color: orange;
     color: white;
     border: 2px solid orange;
 }

 
`

export default Hero
