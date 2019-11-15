import React from 'react';
import classNames from "classnames";
//import {Link} from "react-router-dom";
import {Link, animateScroll as scroll} from "react-scroll";

const HeaderSection = ({isSticky}) => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <header className={classNames("header_area animated", {"sticky slideInDown": isSticky},)}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Menu Area Start */}
                    <div className="col-12 col-lg-10">
                        <div className="menu_area">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                {/* Logo */}
                                <Link className="navbar-brand text-light"
                                      onClick={scrollToTop}
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>Ca.</Link>
                                <button className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#ca-navbar"
                                        aria-controls="ca-navbar"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                {/* Menu Area */}
                                <div className="collapse navbar-collapse" id="ca-navbar">
                                    <ul className="navbar-nav nav-items ml-auto" id="nav">
                                        <li className="nav-item">
                                            <Link activeClass="active"
                                                  to="home"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}>
                                                Home
                                            </Link>
                                            {/*<Link className="nav-link" to="#home">Home</Link>*/}
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClass="active"
                                                  to="about"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}>
                                                About
                                            </Link>
                                            {/*<Link className="nav-link" to="#about">About</Link>*/}
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClass="active"
                                                  to="features"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}>
                                                Features
                                            </Link>
                                            {/*<Link className="nav-link" to="#features">Features</Link>*/}
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClass="active"
                                                  to="screenshot"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}>
                                                Screenshot
                                            </Link>
                                            {/*<Link className="nav-link" to="#screenshot">Screenshot</Link>*/}
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClass="active"
                                                  to="pricing"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}>
                                                Pricing
                                            </Link>
                                            {/*<Link className="nav-link" to="#pricing">Pricing</Link>*/}
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClass="active"
                                                  to="testimonials"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}>
                                                Testimonials
                                            </Link>
                                            {/*<Link className="nav-link" to="#testimonials">Testimonials</Link>*/}
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClass="active"
                                                  to="team"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}>
                                                Team
                                            </Link>
                                            {/* <Link className="nav-link" to="#team">Team</Link>*/}
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClass="active"
                                                  to="contact"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-70}
                                                  duration={500}>
                                                Contact
                                            </Link>
                                            {/*<Link className="nav-link" to="#contact">Contact</Link>*/}
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