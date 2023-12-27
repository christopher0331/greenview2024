import React, { Component } from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import '../styles/Menu.css';
import { Link } from "react-router-dom";


class Menu extends Component {

    render() {
        return(
            <div className="InfoAndMenu">
                <div className="MenuInfo">
                    <a href="tel:303-358-8168">
                        <h4 className="MenuItem" id="phone">303.358.8168  |</h4>
                    </a>
                    <a href="mailto:admin@gvsvo.net">
                        <h4 className="MenuItem" id="email">admin@gvsco.net</h4>
                    </a>
                </div>
                <div className='socialIconBar'>
                    <a href="https://www.facebook.com/GreenViewSolutions/" target="_blank" rel="noreferrer"> 
                        <FontAwesomeIcon className='socialIcons' icon={faFacebookF} size='lg' color='white'/>
                    </a>
                    <a href="https://www.linkedin.com/company/greenview-solutions-llc/about/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='socialIcons' icon={faLinkedin} size='lg' color='white'/>
                    </a>
                    <a href="https://www.instagram.com/greenview_solutions_llc/?hl=en" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='socialIcons' icon={faInstagram} size='lg' color='white'/>
                    </a>
                </div>
                <div id="Menu">
                    <Navbar id="navbar-color" bg="" expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" class="navbarClass"/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto">
                            <Link id="nav-link" to="/">Home</Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item className='ddItem' href="/wood-fences">
                                    Wood Fences
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ddItem' href="/chainlink-fences">
                                    Chain Link Fences
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ddItem' href="/wrought-iron-fences">
                                    Wrought Iron Fences
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ddItem' href="/commercial-fences">
                                    Commercial Fences
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ddItem' href="/custom-fences">
                                    Custom and Special Fences
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ddItem' href="/irrigation">
                                    Irrigation
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link id="nav-link" to="/about-us">About Us</Link>
                            <Link id="nav-link" to="/contact-us">Contact Us</Link>
                            
                            
                            {/* <Link id="nav-link" to="/tools">Tools</Link> */}
                            <NavDropdown title="Tools" id="basic-nav-dropdown">
                                <NavDropdown.Item className='ddItem' href="/fence-calculator">
                                    Fence Calculator 
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ddItem' href="/fencing-process">
                                    Fencing Process
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ddItem' href="/project-overview-form">
                                    Project Overview Form
                                </NavDropdown.Item>
                                <NavDropdown.Item className='ddItem' href="/warranty-form">
                                    Warranty Form
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Link id="nav-link" to="/portfolio"> Portfolio </Link>
                            <Link id="nav-link" to="/faq"> FAQ </Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default Menu;
