import React from 'react';
import Slider from "react-slick";

import client1 from "../assets/img/bg-img/client-1.jpg";
import client2 from "../assets/img/bg-img/client-2.jpg";
import client3 from "../assets/img/bg-img/client-3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientFeedbackSection = () => {
    let settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="clients-feedback-area bg-white section_padding_100 clearfix" id="testimonials">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className="slider slider-for">
                            <Slider {...settings}>
                                <div className="client-feedback-text text-center">
                                    <div className="client">
                                        <i className="fa fa-quote-left" aria-hidden="true"/>
                                    </div>
                                    <div className="client-description text-center">
                                        <p>“ I have been using it for a number of years. I use Colorlib for
                                            usability
                                            testing. It's great for taking images and making clickable image
                                            prototypes
                                            that do the job and save me the coding time and just the general
                                            hassle
                                            of
                                            hosting. ”</p>
                                    </div>
                                    <div className="star-icon text-center">
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                    </div>
                                    <div className="client-name text-center">
                                        <h5>Aigars Silkalns</h5>
                                        <p>Ceo Colorlib</p>
                                    </div>
                                    <div className="client-thumbnail">
                                        <img src={client1} alt="" className="mx-auto my-2"/>
                                    </div>
                                </div>
                                <div className="client-feedback-text text-center">
                                    <div className="client">
                                        <i className="fa fa-quote-left" aria-hidden="true"/>
                                    </div>
                                    <div className="client-description text-center">
                                        <p>“ I use Colorlib for usability testing. It's great for taking images
                                            and
                                            making clickable image prototypes that do the job and save me the
                                            coding
                                            time and just the general hassle of hosting. ”</p>
                                    </div>
                                    <div className="star-icon text-center">
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                    </div>
                                    <div className="client-name text-center">
                                        <h5>Jennifer</h5>
                                        <p>Developer</p>
                                    </div>
                                    <div className="client-thumbnail">
                                        <img src={client2} alt="" className="mx-auto my-2"/>
                                    </div>
                                </div>
                                <div className="client-feedback-text text-center">
                                    <div className="client">
                                        <i className="fa fa-quote-left" aria-hidden="true"/>
                                    </div>
                                    <div className="client-description text-center">
                                        <p>“ I have been using it for a number of years. I use Colorlib for
                                            usability
                                            testing. It's great for taking images and making clickable image
                                            prototypes
                                            that do the job.”</p>
                                    </div>
                                    <div className="star-icon text-center">
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                    </div>
                                    <div className="client-name text-center">
                                        <h5>Helen</h5>
                                        <p>Marketer</p>
                                    </div>
                                    <div className="client-thumbnail">
                                        <img src={client3} alt="" className="mx-auto my-2"/>
                                    </div>
                                </div>
                                <div className="client-feedback-text text-center">
                                    <div className="client">
                                        <i className="fa fa-quote-left" aria-hidden="true"/>
                                    </div>
                                    <div className="client-description text-center">
                                        <p>“ I have been using it for a number of years. I use Colorlib for
                                            usability
                                            testing. It's great for taking images and making clickable image
                                            prototypes
                                            that do the job and save me the coding time and just the general
                                            hassle
                                            of
                                            hosting. ”</p>
                                    </div>
                                    <div className="star-icon text-center">
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                        <i className="ion-ios-star"/>
                                    </div>
                                    <div className="client-name text-center">
                                        <h5>Henry smith</h5>
                                        <p>Developer</p>
                                    </div>
                                    <div className="client-thumbnail">
                                        <img src={client1} alt="" className="mx-auto my-2"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientFeedbackSection;