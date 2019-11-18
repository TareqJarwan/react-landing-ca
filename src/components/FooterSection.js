import React from 'react';
import {Link} from "react-router-dom";

const FooterSection = () => {
    return (
        <footer className="footer-social-icon text-center section_padding_70 clearfix"
                style={{"zIndex": "-101", "position": "fixed", "bottom": "0px", "width": "100%"}}>
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
                <p>Copyright ©2017 Ca. Designed by <Link to="https://colorlib.com"
                                                         target="_blank">Colorlib</Link>
                </p>
            </div>
        </footer>
    );
};

export default FooterSection;