import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Best food waiting for your stomach</h1>
                <input type="text" placeholder="search food item"></input>
                <input type="submit"></input>
            </div>
        </div>
    );
};

export default Banner;