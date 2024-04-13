import React from 'react';
import { Slide} from 'react-slideshow-image';
import { NavBar,LandingCard } from '../../components';
import './LandingPage.css';
import {AiOutlineLeft,AiOutlineRight}from "react-icons/ai"

const indicators = (index) => (<div className="indicator">{' '}</div>);
const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><span style={{color: "white",fontSize: "30px", fontWeight: 'bold'}}><AiOutlineLeft/></span></button>,
    nextArrow: <button style={{ ...buttonStyle }}><span style={{color: "white",fontSize: "30px", fontWeight: 'bold'}}><AiOutlineRight/></span></button>
}
 
const  LandingPage = () => {
    return (
        <div className="LandingPage">
           <NavBar/>
            <Slide indicators={indicators} {...properties} className="Slider" >
              <LandingCard />
              <LandingCard />
            </Slide>
        
        </div>
    );
};

export default LandingPage