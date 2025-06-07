import React from 'react'
import Phoneicon from '../images/phone.png'

function Requirement() {
  return (
    <div className="requirement-container">
        <h2 className='requirement-heading'>NOT SURE WHAT YOU NEED?</h2>
        <p className='requirement-para'>Call us now for expert advice on the perfect setup.</p>
        <button className='requirement-btn'><img src={Phoneicon} className='PhoneICon' alt="PhoneIcon" />305 957 3443</button>
    </div>
  )
}

export default Requirement
