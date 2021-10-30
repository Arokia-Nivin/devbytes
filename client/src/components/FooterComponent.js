import React from 'react'
import '../styles/Footer.css';

function FooterComponent() {
    return (
        <footer className="pt-5 pb-4 mt-5" >
            
            <div className="container text-center text-md-left">
            <hr className="horizontal dark mb-4"></hr>
            <div className="row text-center text-md-left">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="mb-4 font-weight-bold">
                    Institution
                </h5>
                <p>
                    <a href="https://sairam.edu.in/" className="text-black" style={{ textDecoration: "none" }}>
                    Sri Sairam Engineering College
                    </a>
                </p>
                <p>
                    <a
                    href="https://sairamit.edu.in/"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    >
                    Sri Sairam Institute Of Technology
                    </a>
                </p>
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                    <a
                        href="https://www.facebook.com/sairamec/"
                        className="btn-floating btn-sm text-black"
                        style={{ fontSize: 23 }}
                    >
                        <i className="fab fa-facebook" />
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a
                        href="https://twitter.com/sairam_ec?lang=en"
                        className="btn-floating btn-sm text-black"
                        style={{ fontSize: 23 }}
                    >
                        <i className="fab fa-twitter" />
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a
                        href="https://www.linkedin.com/school/sri-sairam-engineering-college/?originalSubdomain=in"
                        className="btn-floating btn-sm text-black"
                        style={{ fontSize: 23 }}
                    >
                        <i className="fab fa-linkedin-in" />
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a
                        href="https://www.youtube.com/channel/UCPd2h6xXL46Xt7rhLz9K_-g"
                        className="btn-floating btn-sm text-black"
                        style={{ fontSize: 23 }}
                    >
                        <i className="fab fa-youtube" />
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a
                        href="https://www.instagram.com/sairamec/?hl=en"
                        className="btn-floating btn-sm text-black"
                        style={{ fontSize: 23 }}
                    >
                        <i className="fab fa-instagram" />
                    </a>
                    </li>
                </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="mb-4 font-weight-bold" >
                    Address
                </h5>
                <p>
                    <a
                    href="https://www.google.com/maps/dir/12.9288755,80.131692/sri+sairam+engineering+college/@12.9593004,80.0587389,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a52f596c7fb72c9:0x8e7a30529f9ef227!2m2!1d80.0572372!2d12.9602483"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    >
                    {" "}
                    Sri Sairam Engineering College
                    </a>
                </p>
                <p>
                    <a
                    href="https://www.google.com/maps/dir/12.9288755,80.131692/sri+sairam+institute+of+technology/@12.9593004,80.0575999,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!2m2!1d80.0532325!2d12.9606471"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    >
                    {" "}
                    Sri Sairam Institute Of Technology
                    </a>
                </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="mb-4 font-weight-bold" >
                    Student Coordinators
                </h5>
                <p>
                    <a
                    href="#"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    >
                    {" "}
                    Ganesh{" "}
                    </a>
                </p>
                <p>
                    <a
                    href="#"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    >
                    {" "}
                    Nithish Raja
                    </a>
                </p>
                <p>
                    <a
                    href="#"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    >
                    Teja Shree
                    </a>
                </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="mb-4 font-weight-bold">
                    Contact
                </h5>
                <p>
                    <i className="fas fa-home mr-3" /> Sai Leo Nagar,West Tambaram,Chennai
                </p>
                <p>
                <a href="mailto:codeclub.sairam@gmail.com" className="text-black"  style={{ textDecoration: "none" }}> <i className="fas fa-envelope mr-3"/> codeclub.sairam@gmail.com</a>
                   
                </p>
                <p>
                    <a href="tel:+919952802037" className="text-black"  style={{ textDecoration: "none" }}><i className="fas fa-phone mr-3" /> 9952802037</a>
                    
                </p>
                </div>
            </div>
            <hr className="horizontal dark mb-4"></hr>
            <div className="text-center">
                <p>
                {" "}
                All rights reserved. Copyright ©
                <a href="#" style={{ textDecoration: "none" }}>
                    <strong>
                    Sairam Group of Institutions
                    </strong>
                </a>
                </p>
            </div>
            </div>
        </footer>

    )
    
}

export default FooterComponent

// footer{
//     background-image:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));
//   }
//   h5,strong{
//     background: linear-gradient(310deg,#7928ca,#ff0080);
//     background-clip:text;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
