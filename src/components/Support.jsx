import React from 'react'
import Preminum from '../images/premium.png'
import Solutions from '../images/solutions.png'
import Services from '../images/service.png'
import Phone from '../images/phone_4.png'
import Larrow from '../images/sliderarrow.png';
import Rarrow from '../images/Srightarrow.png';


const MultipleCards = [
  {
    icon: Preminum,
    ColorHeading: "With expert service and premium equipment,",
    Subheading: "Midtown AV makes your event unforgettable.",
    color: "#00D0FF",
    
  },
  {
    icon: Solutions,
    ColorHeading: "We provide professional av solutions,",
    Subheading: "tailored to enhance event of any size or style.",
    color: "#FF00ED",

  },
  {
    icon: Services,
    ColorHeading: "Serving Miami, Fort Lauderdale, West Palm Beach,",
    Subheading: "and surrounding South Florida regions",
    color: "#00D0FF",

  },
  {
    icon: Phone,
    ColorHeading: "Not Sure What you need?",
    Subheading: "Call now for expert advice on the perfect setup.",
    PhoneNumber: "305 967 7422",
    color: "#FF00ED",

  },
]

function Support() {
  return (
    <div className="support-container">
      <h4 className="support-heading">
        Guidance, answer, and support. <span className="support-subheading">Whenever and however you need it.</span>
      </h4>
      <div className="support-card-container">
        <div className="support-left-arrow">
            <img src={Larrow} alt="Larrow" className="arrows" />
        </div>
        {MultipleCards.map((item, index) => (
          <div key={index} className="card-area">
            <img className='icon-img' src={item.icon} alt="icon" />
            <h6 className='icon-heading'style={{ color: item.color }}>{item.ColorHeading}
            <span className='icon-para'>{item.Subheading}</span>
            </h6>
            {item.PhoneNumber && <p className="phone-number" style={{ color: item.color }}>{item.PhoneNumber}</p>}
          </div>
        ))}
        <div className="support-right-arrow">
            <img src={Rarrow} alt="Larrow"  className="arrows"/>
        </div>
      </div>
    </div>
  )
}

export default Support
