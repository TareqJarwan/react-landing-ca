import React, {Component} from 'react';

import LandingPage from "./components/LandingPage";
import CaptchaPage from "./components/CaptchaPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <CaptchaPage/>
        )
    };
}

export default App;
