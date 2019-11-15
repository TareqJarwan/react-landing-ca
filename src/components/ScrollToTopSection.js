import React from 'react';
import ScrollToTop from "react-scroll-up";

const ScrollToTopSection = () => {
    return (
        <ScrollToTop showUnder={160} style={{"bottom": "0"}}>
            <div id="scrollUp">
                <i className="fa fa-angle-up"> </i>
            </div>
        </ScrollToTop>
    );
};

export default ScrollToTopSection;