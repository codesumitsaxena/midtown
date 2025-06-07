import React from 'react'
import headerImg from '../images/header-img.png'
import Button from '../components/Button'

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="container-img">
            <img className='header-img' src={headerImg} alt="HeaderImg" />
        </div>
        <div className="header-info">
            <h1 className='header-heading'>about</h1>
            <p className='header-para'>Delivering professional AV rentals and production <br></br>services for seamless events , big or small</p>
            <Button/>
        </div>
        
      </div>
    </div>
  )
}

export default Header
