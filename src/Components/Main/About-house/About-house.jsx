import React from "react";
import './about-house.css';
import bg from './about-house-bg.png';

const AboutHouse = () => {
    return (
        <div className="about-house-wrapper">
            <div className="house-info">
                <div className="orange-line"></div>
                <div className="about-house-text">
                    <p>The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago,
                        Lofoten, it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
                        quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
                    </p>
                    <p>Below you'll find information about the accommodation and what's included in the price. Don't
                        hesitate to reach out to us vi the contact page if you have any questions around your stay.
                    </p>
                </div>
                <button>Book now</button>
            </div>
            <div className="big-logo-text">
                <div className="orange-line"></div>
                <h1>The Guest House is the perfect weekend getaway cabin</h1>
            </div>
            <img src={bg} alt=""/>
        </div>
    )
}

export default AboutHouse;