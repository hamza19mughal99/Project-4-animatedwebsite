import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import ankara from "../assests/images/ankara.jpg";
import istanbul1 from "../assests/images/istanbul-1.jpg";
import istanbul from "../assests/images/istanbul.jpg";
import turkey from "../assests/images/turkey.jpg";
import tur from "../assests/images/yur.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [ankara, istanbul1, istanbul, turkey, tur];

function CarosualSection() {
  useEffect(() => {
    Aos.init({ duration:2000});
  },[]);


  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div data-aos="fade-up" className="carosual">
      <h1>CHOOSE YOUR DESTINATION</h1>
      <p>Take a look at the best places in the Turkey. </p>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarosualSection;