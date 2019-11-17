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
import OurTeamSection from "./OurTeamSection";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: true
        }
    }

    /*componentDidMount() {
        window.addEventListener('scroll', this.onScroll, {passive: true});
    }

    onScroll = () => {
        if (window.pageYOffset > 50) {
            this.setState({isSticky: true});
        } else {
            this.setState({isSticky: false});
        }
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }*/

    render() {
        const {isSticky} = this.state;

        return (
            <div dir={'ltr'}>
                <HeaderSection isSticky={isSticky}/>
                <WelcomeSection/>
                <SpecialAreaSection/>
                <AwesomeFeaturesSection/>
                <CoolFactsAreaSection/>
                <AppScreenshotsAreaSection/>
                <CtaSection/>
                <OurTeamSection/>
                <ContactUsSection/>
                <FooterSection/>
                <ScrollToTopSection/>
            </div>
        )
    };
}

export default LandingPage;
