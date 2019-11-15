import React from 'react'
import './HomePageStyle.css'
import MainHeaderImage from '../../images/header-main-image.jpg'

export default function Homepage(){
    return(
        <div className="homepage-container">
            <img src={MainHeaderImage} alt="proximity"/>
            Hi
        </div>
    )
}