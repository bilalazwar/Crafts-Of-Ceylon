import React from 'react'
import Card from '../images/card.png';
import Line from '../images/line.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import { Link } from 'react-router-dom';
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className='footerOne'>

      <div className='cardMethods'>
          <img src={Card} alt="" id='imgCard' />
      </div>
      <div className='socialMedia'>
        <div className='lineOne'>
          <img src={Line} alt="" id='line1' />
        </div>
        <div className='icons'>
          <Link to=""><img src={Facebook} alt="" id='Facebook' /></Link>
          <Link to=""><img src={Instagram} alt="" id='Instagram' /></Link>
          <Link to=""><img src={Twitter} alt="" id='Twitter' /></Link>
        </div>
        <div className='lineTwo'>
          <img src={Line} alt="" id='line2' />
        </div>
        
      </div>
      <div className='hyperLinks'>
          <Link to="/about">About Us</Link>
          <li>|</li>
          <Link to="/contact">Contact Us</Link>
          <li>|</li>
          <Link>Suppot</Link>
          <li>|</li>
          <Link to="/faq">FAQs</Link>
      </div>
      
    </div>
  )
}
