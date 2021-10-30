import React from 'react'
import '../styles/Footer.css';

function FooterComponent() {
    return (
        <div className="FooterComponent">
            <div className="container">
                <div className="row footer-items">
                    <div className="col-md-3 col-sm-6 white-border footer-elements">
                        <h4>Sri Sairam Engineering College</h4>
                    </div>
                    <div className="col-md-3 col-sm-6 white-border footer-elements">
                        <h4>Address</h4>
                        <a href="#address"><p>Sai Leo Nagar,West Tambaram Poonthandalam, Village, Chennai, Tamil Nadu 602109</p></a>
                    </div>
                    <div className="col-md-3 col-sm-6 white-border footer-elements">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum - 1234567890</li>
                            <li>lorem ipsum - 1234567890</li>
                            <li>lorem ipsum - 1234567890</li>
                            <li>mailid@gmail.com</li>

                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <a href="#facebook"><img alt="fb" src="https://img.icons8.com/color/48/000000/facebook.png"/></a>
                        <a href="#instagram"><img alt="insta" src="https://img.icons8.com/color/48/000000/instagram-new.png"/></a>
                        <a href="#linkedin"><img alt="linkedin" src="https://img.icons8.com/fluency/48/000000/linkedin.png"/></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent
