import React from 'react'
import MidTownImg from '../images/contact.png'
import Imagepng from '../images/image.png'

function Midtown() {
  return (
      <div className="midtown-container">
        <div className="midtown-container-img">
           <img className='midtown-img' src={Imagepng} alt="midTown" />
        </div>
        <div className="midtown-container-info">
            <img className='midtown-icon' src={MidTownImg} alt="" />
            <h1 className='Midtown-heading'>More than an audio visual company</h1>
            <p className='midtown-para'>At Midtown Audio Visual, we understand that every event is unique, which is why we tailor our solutions to meet your specific needs. We assess your priorities and expectations, delivering top-tier audio, video, and lighting. technology that not only meets but exceeds them. With over a decade of experience, our seasoned professionals provide comprehensive event solutions ensuring seamless execution.</p>
            <p className='midtown-para'>Beyond setup, we help develop an AV strategy for a smooth and engaging experience. Midtown Audio Visual is committed to bringing your vision to life with immersive and dynamic event solutions.</p>
            <h4 className='midtown-last-heading'>Need equipment for your next event? We offer a wide selection of audio visual rental options</h4>
            <a className='midtown-btn' href="#">BROWSE GEAR</a>
        </div>
      </div>
  )
}

export default Midtown
