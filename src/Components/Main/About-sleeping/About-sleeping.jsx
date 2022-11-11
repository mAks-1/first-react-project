import React from "react";
import './about-sleeping.css';
import bath from './img/bath.svg';
import bed from './img/bed.svg';
import door from './img/door.svg';

const AboutSleeping = () => {
    return (
        <div className="about-sleeping-section">
            <div className="orange-line"></div>
            <h1>Sleeping arrangements</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
                Nulla rhoncus feugiat eros quis consectetur.
            </p>
            <div className="adv-wrapper">
                <div className="sleeping-advantages">
                    <img src={bed} alt=""/>
                    <h4>Beds</h4>
                    <p>The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds.</p>
                </div>
                <div className="sleeping-advantages">
                    <img src={door} alt=""/>
                    <h4>Bedrooms</h4>
                    <p>Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room.</p>
                </div>
                <div className="sleeping-advantages">
                    <img src={bath} alt=""/>
                    <h4>Bathrooms</h4>
                    <p>The cabin has three bathrooms, all equipped with showers and one with a bath tub,</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSleeping;