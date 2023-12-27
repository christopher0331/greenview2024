import React, { useEffect, useState, lazy } from 'react';
//import ImagesMapped from './ImagesMapped.jsx';
//import ImagesMappedSmall from './ImagesMappedSmall.jsx';
import { MetaTags, ReactTitle } from 'react-meta-tags';
import '../styles/HomePage.css';

// Lazy loading components
const Irrigation = lazy(() => import('./Irrigation.jsx'));
const CommercialFences = lazy(() => import('./CommercialFences.jsx'));
const BackflowTests = lazy(() => import('./BackflowTests.jsx'));
const ResidentialFences = lazy(() => import('./ResidentialFences.jsx'));
const Information = lazy(() => import('./Information.jsx'));
//const Project = lazy(() => import('./Projects.jsx'));

const HomePage = (props) => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 684);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 684);
        };

        window.addEventListener('resize', handleResize);

        // Initialize GTM dataLayer
        window.dataLayer = window.dataLayer || [];

        // Define gtag function
        function gtag() {
            window.dataLayer.push(arguments);
        }

        // Load GTM script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11428060127';
        script.async = true;
        document.body.appendChild(script);

        // Execute the GTM script
        script.onload = () => {
            gtag('js', new Date());
            gtag('config', 'AW-11428060127');
        };

        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <MetaTags>
                <meta name="description" 
                      content="GreenView Solutions is the most trusted name in Denver, CO 
                                for wood fencing, chain link fencing, wrought iron fencing 
                                and commercial fencing! Call us at 3030.358.8168 and get 
                                placed on our calendar today! We've got 5 star reviews 
                                everywhere you can find us. GreenView Solutions also 
                                has certified irrigation 
                                experts that can install irrigation systems, or test your 
                                backflow devices."
                      keywords="fencing, irrigation, backflow testing"
                />
            </MetaTags>
            <ReactTitle title="GreenView Solutions"/>

            <div className="ImagesMappedBox">
              Hello
            </div>

            <div className="FirstHomepageBox">
                <div>
                    <h5 id="BoxText">Quality, Communication and Commitment On Every Project</h5>
                    <h5 id="BoxText2">We're Proud to Announce We Now Offer Financing Options!</h5>
                    <a className="financeAnchor" href="https://www.ffcapplication.com/?i=XY5sWUYH644gfJ4gujgeBam42nEvNGIYEC5wDNmMe9o=" target='_blank' rel="noopener noreferrer">
                        <button className="buttonDivSmallFinance">Finance Now</button>
                    </a>
                </div>
            </div>

            <div className="outter">What We Do</div>
            <div className="inner">
                <ResidentialFences changePage={props.changePage}/>
                <CommercialFences changePage={props.changePage}/>
                <Irrigation changePage={props.changePage}/>
            </div>
            <Information />
          
        </div>
    );
}

export default HomePage;

