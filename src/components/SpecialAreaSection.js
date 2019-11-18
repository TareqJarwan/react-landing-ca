import React from 'react';
import ReactWOW from "react-wow";
import special from "../assets/img/bg-img/special.png";
import {Link} from "react-router-dom";

const SpecialAreaSection = () => {
    return (
        <section className="special-area bg-white section_padding_100" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Heading Area */}
                        <div className="section-heading text-center">
                            <h2>Why Is It Special</h2>
                            <div className="line-shape"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Single Special Area */}
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center">
                            <ReactWOW animation='fadeInUp' delay="0.2s">
                                <div className="single-icon">
                                    <i className="ti-mobile" aria-hidden="true"/>
                                </div>
                                <h4>Easy to use</h4>
                                <p>We build pretty complex tools and this allows us to take designs and turn
                                    them
                                    into
                                    functional quickly and easily</p>
                            </ReactWOW>
                        </div>
                    </div>
                    {/* Single Special Area */}
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center">
                            <ReactWOW animation='fadeInUp' delay="0.4s">
                                <div className="single-icon">
                                    <i className="ti-ruler-pencil" aria-hidden="true"/>
                                </div>
                                <h4>Powerful Design</h4>
                                <p>We build pretty complex tools and this allows us to take designs and turn
                                    them
                                    into
                                    functional quickly and easily</p>
                            </ReactWOW>
                        </div>
                    </div>
                    {/* Single Special Area */}
                    <div className="col-12 col-md-4">
                        <div className="single-special text-center">
                            <ReactWOW animation='fadeInUp' delay="0.6s">
                                <div className="single-icon">
                                    <i className="ti-settings" aria-hidden="true"/>
                                </div>
                                <h4>Customizability</h4>
                                <p>We build pretty complex tools and this allows us to take designs and turn
                                    them
                                    into
                                    functional quickly and easily</p>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
            {/* Special Description Area */}
            <div className="special_description_area mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="special_description_img">
                                <img src={special} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5 ml-xl-auto">
                            <div className="special_description_content">
                                <h2>Our Best Propositions for You!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                <div className="app-download-area" dir={"ltr"}>
                                    <div className="app-download-btn">
                                        {/* Google Store Btn */}
                                        <ReactWOW animation='fadeInUp' delay="0.2s">
                                            <Link to="#" style={{textDecoration: 'none', color: 'white'}}>
                                                <i className="fa fa-android"/>
                                                <p className="mb-0"><span>available on</span> Google Store</p>
                                            </Link>
                                        </ReactWOW>
                                    </div>
                                    <div className="app-download-btn">
                                        {/* Apple Store Btn */}
                                        <ReactWOW animation='fadeInDown' delay="0.4s">
                                            <Link to="#" style={{textDecoration: 'none', color: 'white'}}>
                                                <i className="fa fa-apple"/>
                                                <p className="mb-0"><span>available on</span> Apple Store</p>
                                            </Link>
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialAreaSection;