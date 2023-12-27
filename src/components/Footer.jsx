import React from 'react'; 
import '../styles/Footer.css';
import { Link } from "react-router-dom";

const Footer = ()  => {
    
    const Logo = "https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/clearGVSLogo_300.webp?tr=w-300,h-300";

        return(
            <div className="footerOutterDivs">
                <div className='footerDiv'>
                    <img src={Logo} className="footerLogo" alt="GreenView Solutions Logo" />
                    <div className='Info'>
                        <div className='footerHeads'>
                            Contact Info
                        </div>
                            <div>
                                Brandon King
                            </div>
                            <div>
                                <a href="tel:+13033588168">303.358.8168</a>
                            </div>
                            <div>
                                <a href="mailto:admin@gvsco.net">admin@gvsco.net</a>
                            </div>
                            <div>
                                Serving Greater Denver Area
                            </div>
                        </div>
                
                        <div className='SiteLinks'>
                            <div className='footerHeads'>
                                Links
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/" exact> Home </Link>
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/fencing"> Fencing </Link>
                            </div>
                            <div className="links">
                                <Link className='nav-link' to="/irrigation"> Irrigation </Link>
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/contact-us"> Contact Us </Link>                        
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/about-us"> About Us </Link>
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/portfolio"> Portfolio </Link>
                            </div>
                        </div>
                        <div className='Message'>
                            <p className="messageParagraph">
                                GreenView Solutions is a leading provider of premium craftsmanship in the Greater Denver 
                                Area. We take pride in delivering exceptional service to a diverse range of clients, 
                                including schools, government agencies, residential and commercial properties. 
                                Our dedication to quality and attention to detail has earned us a reputation for 
                                excellence, as reflected in our numerous five-star reviews. Contact us to 
                                experience the GreenView Solutions difference for yourself.

                            </p>
                        </div>
                    </div>
            </div>
        )   
}

export default Footer;
