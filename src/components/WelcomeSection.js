import React from 'react';
import ReactWOW from "react-wow";
import welcomeImg from "../assets/img/bg-img/welcome-img.png";

const WelcomeSection = () => {
    return (
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
                                <input type="email" className="form-control email"
                                       placeholder="name@company.com"/>
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
    );
};

export default WelcomeSection;