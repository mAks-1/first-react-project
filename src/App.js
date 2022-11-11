import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import AboutHouse from "./Components/Main/About-house/About-house";
import AboutSleeping from "./Components/Main/About-sleeping/About-sleeping";
import OurAdvantages from "./Components/Main/Our-advantages/Our-advantages";
import Reviews from "./Components/Main/Reviews/Reviews";
import ComeTogether from "./Components/Main/Come-together/Come-together";
import BookContact from "./Components/Main/Book-Contact/Book-Contact";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutHouse/>
            <AboutSleeping/>
            <OurAdvantages/>
            <Reviews/>
            <ComeTogether/>
            <BookContact/>
            <Footer/>
        </div>
    );
}

export default App;
