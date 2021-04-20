import React from 'react';
import "./mainsection.css";
import star from "../assests/images/star-solid.svg"

import libertyHotel from "../assests/images/libertyimg.jpg";



function FinalSection() {
    return (
        <>
            <div className="finalSection" style={{
                backgroundImage: `url(${libertyHotel})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                width: "100%",
                height: "600px",
                marginTop: "0%"
            }}>
                <div className="final-content">
                    <h2>Week In </h2>
                    <h1>THE lIBERTY HOTEL LARA BEACH ANTALYA. </h1>
                </div>
                <div className="finalimg" >
                    <img src={star} alt="star" width="30px" />
                    <img src={star} alt="star" width="30px" />
                    <img src={star} alt="star" width="30px" />
                    <img src={star} alt="star" width="30px" />
                    <img src={star} alt="star" width="30px" />
                </div>
            </div>
            
        </>
    );
}

export default FinalSection;