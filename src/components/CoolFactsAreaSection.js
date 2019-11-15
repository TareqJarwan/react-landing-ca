import React from 'react';
import ReactWOW from "react-wow";
import CountUp from "react-countup";

const CoolFactsAreaSection = () => {
    return (
        <section className="cool_facts_area clearfix">
            <div className="container">
                <div className="row">
                    {/* Single Cool Fact*/}
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="single-cool-fact d-flex justify-content-center">
                            <ReactWOW animation='fadeInUp' delay="0.2s">
                                <div className="counter-area">
                                    <h3>
<span className="counter">
<CountUp delay={0.2} end={90}/>
</span>
                                    </h3>
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
                            <ReactWOW animation='fadeInUp' delay="0.4s">
                                <div className="counter-area">
                                    <h3>
<span className="counter">
<CountUp delay={0.4} end={120}/>
</span>
                                    </h3>
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
                                    <h3><span className="counter"><CountUp delay={0.6} end={40}/></span></h3>
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
                            <ReactWOW animation='fadeInUp' delay="0.8s">
                                <div className="counter-area">
                                    <h3><span className="counter"><CountUp delay={0.8} end={200}/></span></h3>
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
    );
};

export default CoolFactsAreaSection;