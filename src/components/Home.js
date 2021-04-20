import React from 'react';
import MainSection from "./MainSection";
import FinalSection from "./FinalSection";
import Carosual from "./Carosual";
import Features from "./Features";

function Home() {
    return (
        <div>
            <MainSection />
            <Carosual />
            <Features />
            <FinalSection />
        </div>
    );
}

export default Home;