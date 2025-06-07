import React from 'react'
import MiniLogo from '../images/midtown_av_logo_contact_c.png'


function MiniFooter() {
  return (
     <div className="mini-footer">
        <img className='mini-logo' src={MiniLogo} alt="Minilogo" />
       <p className='mini-para'><span className='mini-heading'>Question? </span>Call us at (305)957 4334 or email marc@marcvane.com</p>
       <caption>Copyright@2025 Midtown Audio Visual</caption>
     </div>
  )
}

export default MiniFooter
