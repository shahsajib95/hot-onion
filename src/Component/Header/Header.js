import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../pic/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'



const Header = () => {


    return (
        <div className="header">
            <div className="top">
                <div className="row">
                    <div className="col-md-8 col-6 logo">
                        <img src={Logo} alt="Logo"></img>
                    </div>

                    <div className="col-md-4  col-6">
                        <div className="row">
                            <div className="col-md-5 col-6">
                                <FontAwesomeIcon icon={faCartPlus} />
                                <button className="sign-in">Sign in</button>
                            </div>
                            <div className="col-md-7 col-6">
                                <button className="sign-up active">Sign up</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;