import React from 'react';
import classNames from "classnames";
import {Link} from "react-router-dom";

const HeaderSection = ({isSticky}) => {
    return (
        <header className={classNames("header_area animated", {"sticky slideInDown": isSticky},)}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Menu Area Start */}
                    <div className="col-12 col-lg-10">
                        <div className="menu_area">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                {/* Logo */}
                                <Link className="navbar-brand text-light" to="#">Ca.</Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false"
                                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"/>
                                </button>
                                {/* Menu Area */}
                                <div className="collapse navbar-collapse" id="ca-navbar">
                                    <ul className="navbar-nav ml-auto" id="nav">
                                        <li className="nav-item active"><Link className="nav-link"
                                                                              to="#home">Home</Link></li>
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to="#about">About</Link>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to="#features">Features</Link></li>
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to="#screenshot">Screenshot</Link></li>
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to="#pricing">Pricing</Link>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to="#testimonials">Testimonials</Link>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to="#team">Team</Link>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to="#contact">Contact</Link>
                                        </li>
                                    </ul>
                                    <div className="sing-up-button d-lg-none">
                                        <Link to="#">Sign Up Free</Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Signup btn */}
                    <div className="col-12 col-lg-2">
                        <div className="sing-up-button d-none d-lg-block">
                            <Link to="#">Sign Up Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderSection;