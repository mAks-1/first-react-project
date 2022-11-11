import React from "react";
import './Come-together.css';
import logo from './img/IMAGE.png';
import svg1 from './img/svg1.svg';
import svg2 from './img/svg2.svg';
import svg3 from './img/svg3.svg';
import svg4 from './img/svg4.svg';

const ComeTogether = () =>{
    return(
        <div className="come-together-section">
            <img className="image" src={logo} alt=""/>
            <div className="come-together">
                <div className="wrapper">
                    <div className="orange-line"></div>
                    <h2>Come together.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
                </div>
                <div className="wrapper2">
                    <div>
                        <img src={svg1} alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src={svg2} alt=""/>
                        <p>Nullam scelerisque aliquam odio et faucibus.</p>
                    </div>
                    <div>
                        <img src={svg3} alt=""/>
                        <p>Nulla rhoncus feugiat eros quis consectetur.</p>
                    </div>
                    <div>
                        <img src={svg4} alt=""/>
                        <p>Morbi neque ex, condimentum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComeTogether;