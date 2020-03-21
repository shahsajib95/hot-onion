import React from 'react';
import './Footer.css';
import logo from '../../pic/logo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
            <div className="row">
                <div className="col-md-6">
                    <img src={logo} alt=""></img>
                </div>
                <div className="col-md-3">
                    <a href="/">About Online food</a>
                    <a href="/">Read our blog</a> 
                    <a href="/">Sign Up to deliver</a>
                    <a href="/">Add your restaurant</a>
                </div>
                <div className="col-md-3">
                    <a href="/">Get help</a>
                    <a href="/">Read FAQS</a>
                    <a href="/">View all cities</a>
                    <a href="/">Restaurant near me</a>
                </div>
            </div>
            </div>

            <div className="links">
                <div className="row">
                    <div className="col-md-6">
                   <p style={{color: 'gray'}}>Copyright 2020 Online Food</p>
                    </div>
                    <div className="col-md-6">
                    <a href="/">Privacy Policy.</a>
                    <a href="/">Terms of Use</a>
                    <a href="/">Price</a>
                    </div>
                
            </div>
        </div>
        </div>
    );
};

export default Footer;