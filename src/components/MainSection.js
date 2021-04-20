import React , {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./mainsection.css";
import backgroundImg from "../assests/images/bg1.jpg";


function MainSection() {
    useEffect(() => {
        Aos.init({ duration:2000});
      },[]);
    return (
        <div className="mainSection" style={{ backgroundImage: `url(${backgroundImg})` , 
        backgroundRepeat: 'no-repeat' ,
        backgroundSize: "cover", 
        width: "100%" ,
        height:"600px" ,
        marginTop:"0%"}}>
            <h1 data-aos="zoom-in-right">Book Your Turkey Holiday With Us</h1>
            <p data-aos="zoom-in-right">Discover the Beauty of Turkey in this Holiday...</p>
        </div>
    );
}

export default MainSection;