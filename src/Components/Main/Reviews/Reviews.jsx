import React from "react";
import './reviews.css';
import goodStar from './img/good-star.svg';
import badStar from './img/bad-star.svg';
import leftArrow from './img/left-arrow.png';
import rightArrow from './img/right-arrow.png';

const Reviews = () => {
    return (
        <div className="reviews-section">
            <div className="orange-line"></div>
            <h1>Past guests.</h1>
            <p>Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest
                House.</p>
            <div className="reviews">
                {/*<img className="leftArrow" onClick={rightSwipe} src={leftArrow} alt=""/>*/}
                <div className="review">
                    <div className="mark">
                        <img src={goodStar} alt=""/>
                        <img src={goodStar} alt=""/>
                        <img src={goodStar} alt=""/>
                        <img src={goodStar} alt=""/>
                        <img src={goodStar} alt=""/>
                    </div>
                    <h3>We had an amazing stay at the Guest House!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                        diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.
                    </p>
                    <span>Nate Davidsson</span>
                </div>
                <div className="review hidden-block">
                    <div className="mark">
                        <img src={goodStar} alt=""/>
                        <img src={goodStar} alt=""/>
                        <img src={goodStar} alt=""/>
                        <img src={goodStar} alt=""/>
                        <img src={badStar} alt=""/>
                    </div>
                    <h3>Beautiful little hideaway.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                        diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    </p>
                    <span>Laura Paulie</span>
                </div>
                {/*<img className="rightArrow" src={rightArrow} alt=""/>*/}
            </div>
        </div>
    )
}

// const rightSwipe = () => {
//     document.querySelector(".hidden-block").classList.remove("hidden-block");
//     document.querySelector(".hidden-block").classList.add("show-block");
// }

export default Reviews;