import React from 'react';
import verizon from '../images/verizon.png';
import avis from '../images/avis.png';
import google from '../images/google.png';
import chanel from '../images/chanel.png';
import lacoste from '../images/lacoste.png';

const brandLogos = [verizon, avis, google, chanel, lacoste];

function Partner() {
  return (
    <div>
      <div className="partner-container">
        <h4 className='partner-heading'>Partners in production.        <span className='partner-subheading'>Clients who count on us</span>
 </h4>

        <div className="brand-area">
          {brandLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`brand ${index + 1}`} className='partner-img' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partner;
