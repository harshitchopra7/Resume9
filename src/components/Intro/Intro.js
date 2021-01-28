import React from 'react';
import './Intro.css';
import harshit from '../images/harshit1.jpg';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import hackerrank from '../images/hackerrank.png';
import github from '../images/github.png';

function Intro() {
    return (
        <div className="intro">
            <div className="intro_div">
                <div className="intro_left">
                    <p className="intro_description">Hi! My name is Harshit Chopra and I am an avid web developer.</p>
                    <div>
                        <a href="https://www.linkedin.com/in/harshit-chopra-b98a94189/" target="_blank" rel="noreferrer"><img className="logos" src={linkedin} alt="" /></a>
                        <a href="mailto:chopraharshit2000@gmail.com"><img className="logos" src={gmail} alt="" /></a>
                        <a href="https://github.com/harshitchopra7" target="_blank" rel="noreferrer"><img className="logos" src={github} alt="" /></a>
                        <a href="https://www.hackerrank.com/chopraharshit201" target="_blank" rel="noreferrer"><img className="logos" src={hackerrank} alt="" /></a>        
                    </div>
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
