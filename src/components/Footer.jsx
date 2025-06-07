import React from 'react'
import x from '../images/x.png'
import visualRental from '../images/visual_rental.png'
import stagRental from '../images/stage_rental.png'
import services from '../images/services.png'
import lighting from '../images/lighting.png'
import lightingRental from '../images/lighting_rental.png'
import image3 from '../images/image_3.png'
import Instagram from '../images/ig.png'
import fx from '../images/fx_rental.png'
import Facebook from '../images/facebook.png'
import dj from '../images/dj_rental.png'
import Audio from '../images/audio.png'
import audio_rental from '../images/audio_rental.png'
import Visual from '../images/visual.png'


function Footer() {
  return (
    <div className="footer-container">
        <div className="rental">
         <h5 className='footer-main-heading'>Rental Packages</h5>
         <div className="footer-row">
         <div className="footer-area">
            <img className='footer-img' src={audio_rental} alt="audio-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>AUDIO RENTAL</h6>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Mixing Consoles</a></li>
            <li><a href="#">Mircrophone</a></li>
            </div>
         </div>
         {/* visual rental */}
         <div className="footer-area">
            <img className='footer-img' src={visualRental} alt="visual-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>VISUAL RENTAL</h6>
            <li><a href="#">LED Video Walls</a></li>
            <li><a href="#">Projectors</a></li>
            <li><a href="#">Projectors Screens</a></li>
            <li><a href="#">TV Screens</a></li>
            <li><a href="#">Video Switcher</a></li>

            </div>
         </div>

         {/* Lighting rental */}
         <div className="footer-area">
            <img className='footer-img' src={lightingRental} alt="Lighting-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>LIGHTING RENTAL</h6>
            <li><a href="#">Event Lighting</a></li>
            <li><a href="#">Projectors</a></li>
            <li><a href="#">Projectors Screens</a></li>
            <li><a href="#">TV Screens</a></li>
            <li><a href="#">Video Switcher</a></li>

            </div>
         </div>
         </div>
         {/* footere-rental-2ndrow */}
         <div className="footer-row">
         <div className="footer-area">
            <img className='footer-img' src={stagRental} alt="stag-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>STAG RENTAL</h6>
            <li><a href="#">Stage</a></li>
            <li><a href="#">Truss</a></li>
            <li><a href="#">Podium</a></li>
            <li><a href="#">Crowd Control</a></li>


            </div>
         </div>
         {/* DJ Gear rental */}
         <div className="footer-area">
            <img className='footer-img' src={dj} alt="dj-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>DJ GEAR RENTAL</h6>
            <li><a href="#">DJ Booth</a></li>
            <li><a href="#">DJ COntroller</a></li>
            <li><a href="#">CDJ</a></li>
            </div>
         </div>

         {/* FX  rental */}
         <div className="footer-area">
            <img className='footer-img' src={fx} alt="fx-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>FX RENTAL</h6>
            <li><a href="#">Smoke Machine</a></li>
            <li><a href="#">Hazer MAchine</a></li>
            <li><a href="#">CO2 and Cryo</a></li>
            <li><a href="#">Confetti Machine</a></li>
            </div>
         </div>
         </div>
        </div>
        <div className="av-services">
        <h5 className='footer-main-heading'>AV Services</h5>
        <div className="footer-row">
         <div className="footer-area">
            <img className='footer-img' src={services} alt="Audio-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>EXPLORE SERVICES</h6>
            <li><a href="#">Corporate Audio</a></li>
            <li><a href="#">In-House Solutions</a></li>
            <li><a href="#">AV Equipment Rental</a></li>
            </div>
         </div>
         <div className="footer-area">
            <img className='footer-img' src={Visual} alt="visual" />
            <div className="footer-link">
             <h6 className='footer-heading'>EXPLORE VISUAL</h6>
            <li><a href="#">Projections</a></li>
            <li><a href="#">VIdeo Mapping</a></li>
            <li><a href="#">VIdeo Wall Simulcast</a></li>
            </div>
         </div>
  </div>
   {/* AV SERVICES 2ND ROW */}
  <div className="footer-row">
         <div className="footer-area">
            <img className='footer-img' src={Audio} alt="lighting-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>EXPLORE AUDIO</h6>
            <li><a href="#">Concert Event Audio</a></li>
            <li><a href="#">Corporate Audio</a></li>
            <li><a href="#">DJ Audio</a></li>
            </div>
         </div>
         <div className="footer-area">
            <img className='footer-img' src={lighting} alt="visual-rental" />
            <div className="footer-link">
             <h6 className='footer-heading'>EXPLORE LIGHTING</h6>
            <li><a href="#">Tradeshow Lighting</a></li>
            <li><a href="#">Event Lighting</a></li>
            <li><a href="#">Runway Production</a></li>
            </div>
         </div>
  </div>
        </div>

        
        <div className="directory">
        <h5 className='footer-main-heading'>Directory</h5>
        <div className="footer-row">
         <div className="footer-area">
            <div className="footer-link">
            <li><img className='footer-arrow' src={image3} alt="" /><a href="#">Contact</a></li>
            <li><img className='footer-arrow' src={image3} alt="" /><a href="#">About Us</a></li>
            <li><img className='footer-arrow' src={image3} alt="" /><a href="#">Terms Of Service</a></li>
            <li><img className='footer-arrow' src={image3} alt="" /><a href="#">Privacy Policy</a></li>

             <h4 className='heading-area'>Areas Serviced</h4>
             <li><img className='footer-arrow' src={image3} alt="" /><a href="#">Miami</a></li>
            <li><img className='footer-arrow' src={image3} alt="" /><a href="#">Miami Beach</a></li>
            <li><img className='footer-arrow' src={image3} alt="" /><a href="#">Fort Lauderdale</a></li>
            <li><img className='footer-arrow' src={image3} alt="" /><a href="#">Palm Beach</a></li>
            <li><img className='footer-arrow oreo' src={image3} alt="" /><a href="#">Oriando</a></li>
            <div className="social-li">
            <h4>FOLLOW US</h4>
            <div className="ICON">
               <img className='social-icon' src={x} alt="" />
               <img className='social-icon' src={Facebook} alt="" />
               <img className='social-icon' src={Instagram} alt="" />
            </div>
         </div>
            </div>
         </div>
         </div>
         
        </div>
    </div>
  )
}

export default Footer
