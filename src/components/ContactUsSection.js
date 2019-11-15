import React from 'react';

const ContactUsSection = () => {
    return (
        <section className="footer-contact-area section_padding_100 clearfix" id="contact"
                 style={{"boxShadow": "rgba(0, 0, 0, 0.3) 0px 20px 30px -20px", "marginBottom": "374px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/* Heading Text  */}
                        <div className="section-heading">
                            <h2>Get in touch with us!</h2>
                            <div className="line-shape"/>
                        </div>
                        <div className="footer-text">
                            <p>We'll send you epic weekly blogs, whitepapers and things to make your app startup
                                thrive, all FREE!</p>
                        </div>
                        <div className="address-text">
                            <p><span>Address:</span> 40 Baria Sreet 133/2 NewYork City, US</p>
                        </div>
                        <div className="phone-text">
                            <p><span>Phone:</span> +11-225-888-888-66</p>
                        </div>
                        <div className="email-text">
                            <p><span>Email:</span> info.deercreative@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Form Start*/}
                        <div className="contact_from">
                            <form action="#" method="post">
                                {/* Message Input Area Start */}
                                <div className="contact_input_area">
                                    <div className="row">
                                        {/* Single Input Area Start */}
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name"
                                                       id="name"
                                                       placeholder="Your Name" required/>
                                            </div>
                                        </div>
                                        {/* Single Input Area Start */}
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email"
                                                       id="email"
                                                       placeholder="Your E-mail" required/>
                                            </div>
                                        </div>
                                        {/* Single Input Area Start */}
                                        <div className="col-12">
                                            <div className="form-group">
<textarea name="message" className="form-control" id="message"
          cols={30} rows={4} placeholder="Your Message *" required
          defaultValue={""}/>
                                            </div>
                                        </div>
                                        {/* Single Input Area Start */}
                                        <div className="col-12">
                                            <button type="submit" className="btn submit-btn">Send Now</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Message Input Area End */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;