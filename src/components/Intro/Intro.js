import React from 'react';
import './Intro.css';
import harshit from '../images/harshit1.jpg';

function Intro() {
    return (
        <div className="intro">
            <div className="intro_div">
                <div className="intro_left">
                    <p className="intro_description">Hi! My name is Harshit Chopra and I am an avid web developer.</p>
                    <div>
                    </div>
                </div>
                <div className="intro_right">
                    <img className="harshit" src={harshit} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Intro
