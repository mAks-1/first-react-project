import React from "react";
import './footer.css';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import logo from '../assets/Combined-Shape.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <div>
                    <h4>Pages</h4>
                    <ul>
                        <li>Start</li>
                        <li>Contact</li>
                        <li>Our history</li>
                        <li>License</li>
                        <li>Instructions</li>
                        <li>Style guide</li>
                    </ul>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <img src={twitter} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                </div>
                <div className="block">
                    <h4>Newsletter</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <input className="email" placeholder="Email" type="email"/>
                    <input className="submit" type="submit"/>
                </div>
            </div>
            <div className="our-contacts">
                <img src={logo} alt=""/>
                <p>© Guest House, LLC. All rights reserved. Powered by Webflow</p>
                <p>+47 (0) 702 88 12 34 — example@webflow.io — Klubbvika 12, 8310 Kabelvag, Norway</p>
            </div>
        </div>
    )
}

export default Footer;