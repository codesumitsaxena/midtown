import React from 'react';
import Leftarrow from '../images/white arrow.png';
import Rightarrow from '../images/whiterarrow.png';
import AmazingSlider1 from '../images/amazing1.png';

function Slider() {
  return (
    <div className="amazing-container">
      <div className="sliderArrow">
        <img className="Leftarrow" src={Leftarrow} alt="Leftarrow" />
      </div>

      <div className="slider-img">
        <img className="Amazing-img" src={AmazingSlider1} alt="" />
        <div className="slider-text">
          <h2 className='heading-text'>"Amazing How Good Lighting Makes it Work"</h2>
          <p className='para-text'>Jorge Garcia</p>
        </div>
      </div>

      <div className="RightArrow">
        <img className="Rightarrow1" src={Rightarrow} alt="Rightarrow" />
      </div>
    </div>
  );
}

export default Slider;
