import React, {Component} from 'react';
import Recaptcha from 'react-recaptcha';

class CaptchaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVerified: false
        }
    }

    handleSubscribe = () => {
        if (this.state.isVerified) {
            alert('You have successfully subscribed!');
        } else {
            alert('Please verify that you are a human!');
        }
    };

    verifyCallback = (response) => {
        if (response) {
            this.setState({
                isVerified: true
            })
        }
    };

    recaptchaLoaded = () => {
        console.log('capcha successfully loaded');
    };

    render() {
        return (
            <div className="container m-5">
                <div className="convert" onClick={this.handleSubscribe}>
                    Subscribe
                </div>
                <Recaptcha
                    sitekey="6LcWT8MUAAAAAGxWeLpm7Mf752iDygHp7Pg8vxzn"
                    render="explicit"
                    onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.verifyCallback}/>
            </div>
        );
    }
}

export default CaptchaPage;