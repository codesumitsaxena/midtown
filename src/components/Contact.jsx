import React from 'react'
import contact from '../images/contact2.png'
import Form from '../components/Form'


function Contact() {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-text">
          <img className='contact-img' src={contact} alt="contact" />
          <h1 className='contact-heading'>READY TO BOOK<br/>YOUR GEAR?</h1>
          <h2 className='contact-heading-blue' >GET A QUOTE!</h2>
          <p className='contact-para-top' >Fill out the form, and our team will send <br/>a personalized quote. Prefer to call?</p>
          <p className='contact-para-pink'>Reach us at 305 967 7422</p>
          <p className='contact-small-para'>By clickling "Submit" you agree to receive calls, texts, and emails <br/>from MIDTOWN AUDIO VISUAL pertaining to your rental </p>
        </div>
        <div className="contact-form">
        <Form theme="dark" />
        </div>
      </div>
    </div>
  )
}

export default Contact
