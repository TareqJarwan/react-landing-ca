import React, {Component} from 'react';

import HeaderSection from "./components/HeaderSection";
import WelcomeSection from "./components/WelcomeSection";
import SpecialAreaSection from "./components/SpecialAreaSection";
import AwesomeFeaturesSection from "./components/AwesomeFeaturesSection";
import VideoSection from "./components/VideoSection";
import CoolFactsAreaSection from "./components/CoolFactsAreaSection";
import AppScreenshotsAreaSection from "./components/AppScreenshotsAreaSection";
import PricingPlaneSection from "./components/PricingPlaneSection";
import ClientFeedbackSection from "./components/ClientFeedbackSection";
import CtaSection from "./components/CTASection";
import OurTeamSection from "./components/OurTeamSection";
import ContactUsSection from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";
import ScrollToTopSection from "./components/ScrollToTopSection";

import './App.css';

class App extends Component {
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
                <VideoSection/>
                <CoolFactsAreaSection/>
                <AppScreenshotsAreaSection/>
                <PricingPlaneSection/>
                <ClientFeedbackSection/>
                <CtaSection/>
                <OurTeamSection/>
                <ContactUsSection/>
                <FooterSection/>
                <ScrollToTopSection/>
            </div>
        )
    };
}

export default App;
