import React, { useState } from 'react';
import Slider1 from '../images/slider1.png';
import Slider2 from '../images/container.png';
import Slider3 from '../images/container_2.png';
import Slider4 from '../images/container_3.png';
import Larrow from '../images/sliderarrow.png';
import Rarrow from '../images/Srightarrow.png';

const sliderImages = [
  {
    img: Slider1,
    heading: 'CONCERT AND EVENTS',
    para: `With more than a decade of experience, we've crafted everything from highly anticipated live presentations 
    to intimate nightclub performances. We collaborate closely with clients to ensure the perfect equipment and 
    microphone setups, guaranteeing exceptional sound quality. Whether large or small, our team of skilled 
    sound professionals is ready to deliver a flawless experience.`,
  },
  {
    img: Slider2,
    heading: 'CONCERT AND EVENTS',
    para: `With more than a decade of experience, we've crafted everything from highly anticipated live presentations 
    to intimate nightclub performances. We collaborate closely with clients to ensure the perfect equipment and 
    microphone setups, guaranteeing exceptional sound quality. Whether large or small, our team of skilled 
    sound professionals is ready to deliver a flawless experience.`,
  },
  {
    img: Slider3,
    heading: 'CONCERT AND EVENTS',
    para: `With more than a decade of experience, we've crafted everything from highly anticipated live presentations 
    to intimate nightclub performances. We collaborate closely with clients to ensure the perfect equipment and 
    microphone setups, guaranteeing exceptional sound quality. Whether large or small, our team of skilled 
    sound professionals is ready to deliver a flawless experience.`,
  },
  {
    img: Slider4,
    heading: 'CONCERT AND EVENTS',
    para: `With more than a decade of experience, we've crafted everything from highly anticipated live presentations 
    to intimate nightclub performances. We collaborate closely with clients to ensure the perfect equipment and 
    microphone setups, guaranteeing exceptional sound quality. Whether large or small, our team of skilled 
    sound professionals is ready to deliver a flawless experience.`,
  },
];

function Concert() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = sliderImages[currentIndex];

  return (
    <div className="concert-container">
      <h4 className="event-heading">
        Our service speaks for itself. <span className="event-subheading">We're not just a rental company</span>
      </h4>

      <div className="slider-container">
        <div className="larrows" onClick={handlePrev}>
          <img src={Larrow} alt="Previous Slide" className="arrows" />
        </div>

        <div className="slider-containers">
          <img src={currentSlide.img} className="slider-img1" alt="Slider" />
          <div className="slider-info">
            <h1 className="slider-info-heading">{currentSlide.heading}</h1>
            <p className="slider-info-para">{currentSlide.para}</p>
            <button className="slider-btn">GET A QUOTE</button>
          </div>
        </div>

        <div className="Rarows" onClick={handleNext}>
          <img src={Rarrow} alt="Next Slide" className="arrows" />
        </div>
      </div>
    </div>
  );
}

export default Concert;
