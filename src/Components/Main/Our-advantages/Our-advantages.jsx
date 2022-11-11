import React from "react";
import './Our-advantages.css';
import adv1 from './img/adv1.svg';
import adv2 from './img/adv2.svg';
import adv3 from './img/adv3.svg';
import adv4 from './img/adv4.svg';
import adv5 from './img/adv5.svg';
import adv6 from './img/adv6.svg';
import adv7 from './img/adv7.svg';
import adv8 from './img/adv8.svg';


const OurAdvantages = () => {
    return (
        <div className="our-advantages">
            <div className="orange-line"></div>
            <h1>The perfect escape</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
                Nulla rhoncus feugiat eros quis consectetur.
            </p>
            <div className="advantages-wrapper">
                <div className="advantage">
                    <img src={adv1} alt=""/>
                    <div>
                        <p>Modern Kitchen Appliances</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="advantage">
                    <img src={adv2} alt=""/>
                    <div>
                        <p>Outdoor Paths</p>
                        <p>Nulla rhoncus feugiat eros quis consectetur.</p>
                    </div>
                </div>
                <div className="advantage">
                    <img src={adv3} alt=""/>
                    <div>
                        <p>Coffee Maker</p>
                        <p>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci
                            tincidunt.</p>
                    </div>
                </div>
                <div className="advantage">
                    <img src={adv4} alt=""/>
                    <div>
                        <p>Natural Scenery</p>
                        <p>Cras commodo consequat orci, in convallis risus egestas non.</p>
                    </div>
                </div>
                <div className="advantage">
                    <img src={adv5} alt=""/>
                    <div>
                        <p>Air Conditioner</p>
                        <p>Nullam scelerisque aliquam odio et faucibus.</p>
                    </div>
                </div>
                <div className="advantage">
                    <img src={adv6} alt=""/>
                    <div>
                        <p>Storage Solutions</p>
                        <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
                    </div>
                </div>
                <div className="advantage">
                    <img src={adv7} alt=""/>
                    <div>
                        <p>Cutlery Selection</p>
                        <p>Duis tristique sed lorem a vestibulum.</p>
                    </div>
                </div>
                <div className="advantage">
                    <img src={adv8} alt=""/>
                    <div>
                        <p>Take-away Options</p>
                        <p>Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurAdvantages;