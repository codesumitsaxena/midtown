import React from 'react';
import Button from './Button';
import audio1 from '../images/eventCard1.png';
import audio2 from '../images/eventCard2.png';
import audio3 from '../images/eventCard3.png';
import audio4 from '../images/eventCard4.png';

const cards = [
  {
    heading: "AUDIO",
    description: "Providing uncompromising audio quality at the heart of every event",
    image: audio1
  },
  {
    heading: "Lighting",
    description: "Settle for nothing less than high-tech, stunning lighting you visuals",
    image: audio2
  },
  {
    heading: "Video walls",
    description: "Settle for nothing less than high-tech, stunning visuals.",
    image: audio3
  },
  {
    heading: "Projections",
    description: "Conveying distinct images and video based on your vision.",
    image: audio4
  }
];

function Event() {
  return (
    <div className="event-container">
      <h4 className="event-heading">
        Events are meant to impact. <span className="event-subheading">We're here to make it happen</span>
      </h4>

      <div className="event-cards">
        {cards.map((card, index) => (
          <div
            className="event-card"
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="event-card-content">
              <h4 className="event-card-heading">{card.heading}</h4>
              <p className="event-card-description">{card.description}</p>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 

export default Event;
