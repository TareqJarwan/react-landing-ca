import React from 'react';
import OwlCarousel from "react-owl-carousel";

import app1 from "../assets/img/scr-img/app-1.jpg";
import app2 from "../assets/img/scr-img/app-2.jpg";
import app3 from "../assets/img/scr-img/app-3.jpg";
import app4 from "../assets/img/scr-img/app-4.jpg";
import app5 from "../assets/img/scr-img/app-5.jpg";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const AppScreenshotsAreaSection = () => {
    return (
        <div dir="ltr">
            <section className="app-screenshots-area bg-white section_padding_0_100 clearfix" id="screenshot">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading Text  */}
                            <div className="section-heading">
                                <h2>App Screenshots</h2>
                                <div className="line-shape"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {/* App Screenshots Slides  */}
                            <OwlCarousel
                                className="app_screenshots_slides owl-theme owl-carousel" loop margin={30} dots
                                items={5} dotsEach autoplay autoplayHoverPause center>
                                <div className="single-shot">
                                    <img src={app1} alt=""/>
                                </div>
                                <div className="single-shot">
                                    <img src={app2} alt=""/>
                                </div>
                                <div className="single-shot">
                                    <img src={app3} alt=""/>
                                </div>
                                <div className="single-shot">
                                    <img src={app4} alt=""/>
                                </div>
                                <div className="single-shot">
                                    <img src={app5} alt=""/>
                                </div>
                                <div className="single-shot">
                                    <img src={app3} alt=""/>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppScreenshotsAreaSection;