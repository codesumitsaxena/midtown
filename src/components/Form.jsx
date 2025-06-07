import React from 'react';

function Form({ theme }) {
  return (
    <form className={`form ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="row">
        <div className="input-group">
          <label className='label-text' htmlFor="firstName">First Name</label>
          <input className='input-a' type="text" name="firstName" id="firstName" />
        </div>
        <div className="input-group">
          <label className='label-text' htmlFor="lastName">Last Name</label>
          <input className='input-a' type="text" name="lastName" id="lastName" />
        </div>
      </div>

      <div className="input-group">
        <label className='label-text' htmlFor="email">Email</label>
        <input className='input-a' type="email" name="email" id="email" />
      </div>
      <div className="input-group">
        <label className='label-text' htmlFor="Phone">Phone</label>
        <input className='input-a' type="number" name="Phone" id="Phone" />
      </div>

      <div className="input-group">
        <label className='label-text' htmlFor="services">Services</label>
        <select className='input-a' name="services" id="services">
          <option value="">Select a service</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile App Development</option>
          <option value="seo">SEO</option>
        </select>
      </div>

      <div className="input-group">
        <label className='label-text' htmlFor="message">Message</label>
        <textarea className='input-a' name="message" id="message" cols="30" rows="5"></textarea>
      </div>

      <div className="button-container">
        <button className='mini-btn' type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
