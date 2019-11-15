import React from 'react';
import team1 from "../assets/img/team-img/team-1.jpg";
import {Link} from "react-router-dom";
import team2 from "../assets/img/team-img/team-2.jpg";
import team3 from "../assets/img/team-img/team-3.jpg";
import team4 from "../assets/img/team-img/team-4.jpg";

const OurTeamSection = () => {
    return (
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
                                        <Link to="#"><i className="fa fa-google-plus"
                                                        aria-hidden="true"/></Link>
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
                                        <Link to="#"><i className="fa fa-google-plus"
                                                        aria-hidden="true"/></Link>
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
                                        <Link to="#"><i className="fa fa-google-plus"
                                                        aria-hidden="true"/></Link>
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
                                        <Link to="#"><i className="fa fa-google-plus"
                                                        aria-hidden="true"/></Link>
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
    );
};

export default OurTeamSection;