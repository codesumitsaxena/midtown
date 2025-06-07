import React from 'react'
import EnquiryPhone from '../images/midtown_av_logo_contact_c.png'
import Map from '../images/map.jpg'
import Form from '../components/Form'

function Enquiry() {
  return (
    <div className="enquiry-container">
        <img src={EnquiryPhone} className='Enquiry-icon' alt="EnquiryPHone" />
        <div className="enquiry-area">
            <div className="enquiry-left-area">
                <h2 className='enquiry-heading'>READY TO ELEVATE YOUR NEXT EVENT?
                </h2>
                <h2 className='enquiry-subheading'>LET'S TALK!</h2>
           
                <Form theme="light" />
            </div>
            <div className="enquiry-right-area">
                <img src={Map} alt="Map"  className='map-icon'/>
                <h5 className='map-right-heading'>Give us a call or fill out the form, and one of our team members will get back to you as quickly as possible!</h5>
                    <p className='map-subheadig'>305-967-7422
                    marc@marcvane.com</p>
                    <p className='map-subheadig'>138 NW 36th Street. Miami, FL 33127</p>

                   <p className='map-subheadig'> WEEKDAYS: 24 HOUR<br/>
                    SAT: 5AM-11PM<br/>
                    SUN: Closed</p>
            </div>

        </div>
    </div>
  )
}

export default Enquiry
