import React from 'react'
import '../../App.css';
import { Button } from '../button/Button.js';
import './HeroSection.css';
import data from "../../video/intro.mp4"


function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video autoPlay loop muted>
              <source src={data} type="video/mp4"></source>
            </video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className = 'btns' buttonStyle = 'btn--outline' 
                buttonSize = 'btn--large'>GET STARTED</Button>
                 <Button className = 'btns' buttonStyle = 'btn--primary' 
                buttonSize = 'btn--large'>LOGIN </Button>
            </div>
               
        </div>
    )
}

export default HeroSection