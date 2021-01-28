import React from 'react';
import './Navbar.css';
import $ from 'jquery';
window.$ = $;

function Navbar() {

    $(document).ready(function () {
        // Transition effect for navbar 
        $(window).scroll(function () {
            // checks if window is scrolled more than 500px, adds/removes solid class
            if ($(this).scrollTop() > 500) {
                $('.navbar').addClass('solid');
            } else {
                $('.navbar').removeClass('solid');
            }
        });
    });

    return (
        <div className="navbar">
            <div className="nav-elements">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Navbar;
