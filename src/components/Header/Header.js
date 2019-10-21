import React from 'react'
import './HeaderStyle.css'

export default function Header(){
    return(
        <div>
            <div class="navbar">
                <div class="logo">
                    <a href="#" target="#" class="proximity-header-logo">Proximity-eSports</a>
                    <a href="#" target="_blank" class="proximity-subheader-logo">Buy customized gaming rigs!</a>
                </div>
                <div class="navbar-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                {/* <div class="navbar-login">
                    <p><a href="#">Log In</a></p>
                </div> */}
            </div>
        </div>
    )
}