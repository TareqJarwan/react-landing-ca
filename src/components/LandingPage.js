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
import OurTeamSection from "./OurTeamSection";

import '../App.css';
import '../assets/css/responsive.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false
        }
    }

    /*componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            console.log(window.scrollY, true);
            this.setState({isSticky: true});
        } else if (window.scrollY < 100) {
            console.log(window.scrollY, false);
            this.setState({isSticky: false});
        }
    };*/

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
