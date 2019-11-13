import React from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';

import './App.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from './img/bg-img/client-1.jpg';
import client2 from './img/bg-img/client-2.jpg';
import client3 from './img/bg-img/client-3.jpg';
import welcomeImg from './img/bg-img/welcome-img.png';
import special from './img/bg-img/special.png';
import video from './img/bg-img/video.jpg';

import team1 from './img/team-img/team-1.jpg';
import team2 from './img/team-img/team-2.jpg';
import team3 from './img/team-img/team-3.jpg';
import team4 from './img/team-img/team-4.jpg';

import app1 from './img/scr-img/app-1.jpg';
import app2 from './img/scr-img/app-2.jpg';
import app3 from './img/scr-img/app-3.jpg';
import app4 from './img/scr-img/app-4.jpg';
import app5 from './img/scr-img/app-5.jpg';


const App = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            {/* Preloader Start */}
            {/*<div id="preloader">
                <div className="colorlib-load"/>
            </div>*/}
            {/* ***** Header Area Start ***** */}
            <header className="header_area animated">
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
                                            <li className="nav-item"><Link className="nav-link" to="#about">About</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to="#features">Features</Link></li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to="#screenshot">Screenshot</Link></li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to="#pricing">Pricing</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                           to="#testimonials">Testimonials</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="#team">Team</Link>
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
            {/* ***** Header Area End ***** */}
            {/* ***** Wellcome Area Start ***** */}
            <section className="wellcome_area clearfix" id="home">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 col-md">
                            <div className="wellcome-heading">
                                <h2>Colorlib app</h2>
                                <h3>C</h3>
                                <p>Everything You Need. To Start Selling Online Beautifully</p>
                            </div>
                            <div className="get-start-area">
                                {/* Form Start */}
                                <form action="#" method="post" className="form-inline">
                                    <input type="email" className="form-control email" placeholder="name@company.com"/>
                                    <input type="submit" className="submit" defaultValue="Get Started"/>
                                </form>
                                {/* Form End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Welcome thumb */}
                <div className="welcome-thumb">
                    <ReactWOW animation='fadeInDown' delay="0.5s">
                        <img src={welcomeImg} alt=""/>
                    </ReactWOW>
                </div>
            </section>
            {/* ***** Wellcome Area End ***** */}
            {/* ***** Special Area Start ***** */}
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
                                    <p>We build pretty complex tools and this allows us to take designs and turn them
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
                                    <p>We build pretty complex tools and this allows us to take designs and turn them
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
                                    <p>We build pretty complex tools and this allows us to take designs and turn them
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                    <div className="app-download-area">
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
            {/* ***** Special Area End ***** */}
            {/* ***** Awesome Features Start ***** */}
            <section className="awesome-feature-area bg-white section_padding_0_50 clearfix" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading Text */}
                            <div className="section-heading text-center">
                                <h2>Awesome Features</h2>
                                <div className="line-shape"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Single Feature Start */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-user" aria-hidden="true"/>
                                <h5>Awesome Experience</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        {/* Single Feature Start */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-pulse" aria-hidden="true"/>
                                <h5>Fast and Simple</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        {/* Single Feature Start */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-dashboard" aria-hidden="true"/>
                                <h5>Clean Code</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        {/* Single Feature Start */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-palette" aria-hidden="true"/>
                                <h5>Perfect Design</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        {/* Single Feature Start */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-crown" aria-hidden="true"/>
                                <h5>Best Industry Leader</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        {/* Single Feature Start */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-headphone" aria-hidden="true"/>
                                <h5>24/7 Online Support</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Awesome Features End ***** */}
            {/* ***** Video Area Start ***** */}
            <div className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Video Area Start */}
                            <div className="video-area" style={{backgroundImage: `url(${video})`}}>
                                <div className="video-play-btn">
                                    <Link to="https://www.youtube.com/watch?v=f5BBJ4ySgpo" className="video_btn"><i
                                        className="fa fa-play" aria-hidden="true"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Video Area End ***** */}
            {/* ***** Cool Facts Area Start ***** */}
            <section className="cool_facts_area clearfix">
                <div className="container">
                    <div className="row">
                        {/* Single Cool Fact*/}
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="single-cool-fact d-flex justify-content-center">
                                <ReactWOW animation='fadeInUp' delay="0.2s">
                                    <div className="counter-area">
                                        <h3><span className="counter">90</span></h3>
                                    </div>
                                    <div className="cool-facts-content">
                                        <i className="ion-arrow-down-a"/>
                                        <p>APP <br/> DOWNLOADS</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                        {/* Single Cool Fact*/}
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="single-cool-fact d-flex justify-content-center">
                                <ReactWOW animation='fadeInUp' delay="0.2s">
                                    <div className="counter-area">
                                        <h3><span className="counter">120</span></h3>
                                    </div>
                                    <div className="cool-facts-content">
                                        <i className="ion-happy-outline"/>
                                        <p>Happy <br/> Clients</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                        {/* Single Cool Fact*/}
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="single-cool-fact d-flex justify-content-center">
                                <ReactWOW animation='fadeInUp' delay="0.6s">
                                    <div className="counter-area">
                                        <h3><span className="counter">40</span></h3>
                                    </div>
                                    <div className="cool-facts-content">
                                        <i className="ion-person"/>
                                        <p>ACTIVE <br/>ACCOUNTS</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                        {/* Single Cool Fact*/}
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="single-cool-fact d-flex justify-content-center">
                                <ReactWOW animation='fadeInUp' delay="0.2s">
                                    <div className="counter-area">
                                        <h3><span className="counter">10</span></h3>
                                    </div>
                                    <div className="cool-facts-content">
                                        <i className="ion-ios-star-outline"/>
                                        <p>TOTAL <br/>APP RATES</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Cool Facts Area End ***** */}
            {/* ***** App Screenshots Area Start ***** */}
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
                                className="app_screenshots_slides owl-theme owl-carousel" loop margin={10} dots
                                items={5}
                                dotsEach autoplay autoplayHoverPause center>
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
            {/* ***** App Screenshots Area End *****====== */}
            {/* ***** Pricing Plane Area Start *****==== */}
            <section className="pricing-plane-area section_padding_100_70 clearfix" id="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading Text  */}
                            <div className="section-heading text-center">
                                <h2>Pricing Plan</h2>
                                <div className="line-shape"/>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Package Price  */}
                            <div className="single-price-plan text-center">
                                {/* Package Text  */}
                                <div className="package-plan">
                                    <h5>Starter Plan</h5>
                                    <div className="ca-price d-flex justify-content-center">
                                        <span>$</span>
                                        <h4>29</h4>
                                    </div>
                                </div>
                                <div className="package-description">
                                    <p>Up to 10 users monthly</p>
                                    <p>Unlimited updates</p>
                                    <p>Free host &amp; domain</p>
                                    <p>24/7 Support</p>
                                    <p>10 Unique Users</p>
                                </div>
                                {/* Plan Button  */}
                                <div className="plan-button">
                                    <Link to="#">Select Plan</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Package Price  */}
                            <div className="single-price-plan text-center">
                                {/* Package Text  */}
                                <div className="package-plan">
                                    <h5>Basic Plan</h5>
                                    <div className="ca-price d-flex justify-content-center">
                                        <span>$</span>
                                        <h4>49</h4>
                                    </div>
                                </div>
                                <div className="package-description">
                                    <p>Up to 10 users monthly</p>
                                    <p>Unlimited updates</p>
                                    <p>Free host &amp; domain</p>
                                    <p>24/7 Support</p>
                                    <p>10 Unique Users</p>
                                </div>
                                {/* Plan Button  */}
                                <div className="plan-button">
                                    <Link to="#">Select Plan</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Package Price  */}
                            <div className="single-price-plan active text-center">
                                {/* Package Text  */}
                                <div className="package-plan">
                                    <h5>Advenced Plan</h5>
                                    <div className="ca-price d-flex justify-content-center">
                                        <span>$</span>
                                        <h4>69</h4>
                                    </div>
                                </div>
                                <div className="package-description">
                                    <p>Up to 10 users monthly</p>
                                    <p>Unlimited updates</p>
                                    <p>Free host &amp; domain</p>
                                    <p>24/7 Support</p>
                                    <p>10 Unique Users</p>
                                </div>
                                {/* Plan Button  */}
                                <div className="plan-button">
                                    <Link to="#">Select Plan</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Package Price  */}
                            <div className="single-price-plan text-center">
                                {/* Package Text  */}
                                <div className="package-plan">
                                    <h5>Community Plan</h5>
                                    <div className="ca-price d-flex justify-content-center">
                                        <span>$</span>
                                        <h4>99</h4>
                                    </div>
                                </div>
                                <div className="package-description">
                                    <p>Up to 10 users monthly</p>
                                    <p>Unlimited updates</p>
                                    <p>Free host &amp; domain</p>
                                    <p>24/7 Support</p>
                                    <p>10 Unique Users</p>
                                </div>
                                {/* Plan Button  */}
                                <div className="plan-button">
                                    <Link to="#">Select Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Pricing Plane Area End ***** */}
            {/* ***** Client Feedback Area Start ***** */}
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
                                                that do the job and save me the coding time and just the general hassle
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
                                            <p>“ I use Colorlib for usability testing. It's great for taking images and
                                                making clickable image prototypes that do the job and save me the coding
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
                                                that do the job and save me the coding time and just the general hassle
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
            {/* ***** Client Feedback Area End ***** */}
            {/* ***** CTA Area Start ***** */}
            <section className="our-monthly-membership section_padding_50 clearfix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="membership-description">
                                <h2>Join our Monthly Membership</h2>
                                <p>Find the perfect plan for you — 100% satisfaction guaranteed.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="get-started-button">
                                <ReactWOW animation='bounceInDown' delay="0.5s">
                                    <Link to="#">Get Started</Link>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** CTA Area End ***** */}
            {/* ***** Our Team Area Start ***** */}
            <section className="our-Team-area bg-white section_padding_100_50 clearfix" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading Text  */}
                            <div className="section-heading">
                                <h2>Our Team</h2>
                                <div className="line-shape"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src={team1} alt=""/>
                                    <div className="team-hover-effects">
                                        <div className="team-social-icon">
                                            <Link to="#"><i className="fa fa-facebook" aria-hidden="true"/></Link>
                                            <Link to="#"><i className="fa fa-twitter" aria-hidden="true"/></Link>
                                            <Link to="#"><i className="fa fa-google-plus" aria-hidden="true"/></Link>
                                            <Link to="#"> <i className="fa fa-instagram" aria-hidden="true"/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-text">
                                    <h4>Jackson Nash</h4>
                                    <p>Tax Advice</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src={team2} alt=""/>
                                    <div className="team-hover-effects">
                                        <div className="team-social-icon">
                                            <Link to="#"><i className="fa fa-facebook" aria-hidden="true"/></Link>
                                            <Link to="#"><i className="fa fa-twitter" aria-hidden="true"/></Link>
                                            <Link to="#"><i className="fa fa-google-plus" aria-hidden="true"/></Link>
                                            <Link to="#"> <i className="fa fa-instagram" aria-hidden="true"/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-text">
                                    <h4>Alex Manning</h4>
                                    <p>CEO-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src={team3} alt=""/>
                                    <div className="team-hover-effects">
                                        <div className="team-social-icon">
                                            <Link to="#"><i className="fa fa-facebook" aria-hidden="true"/></Link>
                                            <Link to="#"><i className="fa fa-twitter" aria-hidden="true"/></Link>
                                            <Link to="#"><i className="fa fa-google-plus" aria-hidden="true"/></Link>
                                            <Link to="#"> <i className="fa fa-instagram" aria-hidden="true"/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-text">
                                    <h4>Ollie Schneider</h4>
                                    <p>Business Planner</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src={team4} alt=""/>
                                    <div className="team-hover-effects">
                                        <div className="team-social-icon">
                                            <Link to="#"><i className="fa fa-facebook" aria-hidden="true"/></Link>
                                            <Link to="#"><i className="fa fa-twitter" aria-hidden="true"/></Link>
                                            <Link to="#"><i className="fa fa-google-plus" aria-hidden="true"/></Link>
                                            <Link to="#"> <i className="fa fa-instagram" aria-hidden="true"/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-text">
                                    <h4>Roger West</h4>
                                    <p>Financer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Our Team Area End ***** */}
            {/* ***** Contact Us Area Start ***** */}
            <section className="footer-contact-area section_padding_100 clearfix" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* Heading Text  */}
                            <div className="section-heading">
                                <h2>Get in touch with us!</h2>
                                <div className="line-shape"/>
                            </div>
                            <div className="footer-text">
                                <p>We'll send you epic weekly blogs, whitepapers and things to make your app startup
                                    thrive, all FREE!</p>
                            </div>
                            <div className="address-text">
                                <p><span>Address:</span> 40 Baria Sreet 133/2 NewYork City, US</p>
                            </div>
                            <div className="phone-text">
                                <p><span>Phone:</span> +11-225-888-888-66</p>
                            </div>
                            <div className="email-text">
                                <p><span>Email:</span> info.deercreative@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* Form Start*/}
                            <div className="contact_from">
                                <form action="#" method="post">
                                    {/* Message Input Area Start */}
                                    <div className="contact_input_area">
                                        <div className="row">
                                            {/* Single Input Area Start */}
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="name" id="name"
                                                           placeholder="Your Name" required/>
                                                </div>
                                            </div>
                                            {/* Single Input Area Start */}
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" id="email"
                                                           placeholder="Your E-mail" required/>
                                                </div>
                                            </div>
                                            {/* Single Input Area Start */}
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message"
                                                              cols={30} rows={4} placeholder="Your Message *" required
                                                              defaultValue={""}/>
                                                </div>
                                            </div>
                                            {/* Single Input Area Start */}
                                            <div className="col-12">
                                                <button type="submit" className="btn submit-btn">Send Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Message Input Area End */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Contact Us Area End ***** */}
            {/* ***** Footer Area Start ***** */}
            <footer className="footer-social-icon text-center section_padding_70 clearfix">
                {/* footer logo */}
                <div className="footer-text">
                    <h2>Ca.</h2>
                </div>
                {/* social icon*/}
                <div className="footer-social-icon">
                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true"/></Link>
                    <Link to="#"><i className="active fa fa-twitter" aria-hidden="true"/></Link>
                    <Link to="#"> <i className="fa fa-instagram" aria-hidden="true"/></Link>
                    <Link to="#"><i className="fa fa-google-plus" aria-hidden="true"/></Link>
                </div>
                <div className="footer-menu">
                    <nav>
                        <ul>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                {/* Foooter Text*/}
                <div className="copyright-text">
                    {/* ***** Removing this text is now allowed! This template is licensed under CC BY 3.0 ***** */}
                    <p>Copyright ©2017 Ca. Designed by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                    </p>
                </div>
            </footer>
            {/* ***** Footer Area Start ***** */}
        </div>
    );
};


export default App;
