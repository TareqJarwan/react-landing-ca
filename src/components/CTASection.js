import React from 'react';
import ReactWOW from "react-wow";
import {Link} from "react-router-dom";

const CtaSection = () => {
    return (
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
    );
};

export default CtaSection;