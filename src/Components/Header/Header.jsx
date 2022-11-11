import React from "react";
import logo from '../assets/Combined-Shape.png';
import './styles/header.css';
import styles from './styles/Header.module.css';
import './styles/reset.css';
import burgerBar from '../assets/burger-bar.png';
import close from '../assets/close.png';

const addClass = ()=>{
    document.querySelector(".burger-block").classList.add("show-hide")
}

const removeClass = ()=>{
    document.querySelector(".burger-block").classList.remove("show-hide")
}

const Header = () =>{
    return(
        <header className={styles.bg}>
            <div className="navigation">
                <img className="burger-bar" onClick={addClass} src={burgerBar} alt=""/>
                <img className="nav-img" src={logo} alt=""/>
                <ul>
                    <li>Start</li>
                    <li>Contact</li>
                    <li>Our history</li>
                </ul>
                <button>Book now</button>
            </div>
            <div className="burger-block">
                <img className="close" onClick={removeClass} src={close} alt=""/>
                <ul>
                    <li>Start</li>
                    <li>Contact</li>
                    <li>Our history</li>
                </ul>
            </div>
            <div className="block">
                <div className="wrapper">
                    <img src={logo} alt=""/>
                    <p className="logo">Experience the perfect combination of modern housing & natural scenery.</p>
                    <p>Located in Lofoten, norway</p>
                </div>
            </div>
        </header>
    )
}

export default Header;