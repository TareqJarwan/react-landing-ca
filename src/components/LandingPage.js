import React, {Component} from 'react';

import HeaderSection from "./HeaderSection";
import WelcomeSection from "./WelcomeSection";
import SpecialAreaSection from "./SpecialAreaSection";
import AwesomeFeaturesSection from "./AwesomeFeaturesSection";
import CoolFactsAreaSection from "./CoolFactsAreaSection";
import AppScreenshotsAreaSection from "./AppScreenshotsAreaSection";
import CtaSection from "./CTASection";
import ContactUsSection from "./ContactUsSection";
import FooterSection from "./FooterSection";
import ScrollToTopSection from "./ScrollToTopSection";

import '../App.css';
import '../assets/css/responsive.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false
        }
    }

    componentDidMount() {
        let self = this;
        window.onscroll = function () {
            if (window.pageYOffset > 50) {
                self.setState({isSticky: true});
            } else {
                self.setState({isSticky: false});
            }
        };
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    render() {
        const {isSticky} = this.state;

        return (
            <div>
                <HeaderSection isSticky={isSticky}/>
                <WelcomeSection/>
                <SpecialAreaSection/>
                <AwesomeFeaturesSection/>
                <CoolFactsAreaSection/>
                <AppScreenshotsAreaSection/>
                <CtaSection/>
                <ContactUsSection/>
                <FooterSection/>
                <ScrollToTopSection/>
            </div>
        )
    };
}

export default LandingPage;
