import React from 'react';
import {Link} from "react-router-dom";

const PricingPlaneSection = () => {
    return (
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
    );
};

export default PricingPlaneSection;