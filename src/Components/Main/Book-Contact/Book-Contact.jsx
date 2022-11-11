import React from "react";
import './book-contact.css';

const BookContact = () => {
    return(
        <div className="book-contact-section">
            <div className="orange-line"></div>
            <h1>We're already booked up for the spring — hurry up & secure your stay for the summer.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
            <div>
                <button className="contact">Contact</button>
                <button>Book now</button>
            </div>
        </div>
    )
}

export default BookContact;