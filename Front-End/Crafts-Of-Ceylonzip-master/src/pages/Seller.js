import React, { useState } from 'react';
import '../styles/productView.css'
import {NavigationBar4} from '../components/NavigationBar';
import Footer from '../components/Footer';
import SellerView from '../components/SellerView';
import { SellerProfileSideBar } from '../components/ProfileSideBar';
import '../styles/seller.css'

export default function Seller() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
        <NavigationBar4/>
        <div className='aboutBackgroundPage'>

        <h1>Welcome Seller</h1>
        <p>Your Dashboard will provide an overview of your business at Crafts of Ceylon. </p>
        </div>

        <div className='SellerSelectAndView'>
          <div className='sidebar'>
            <SellerProfileSideBar onOptionClick={handleOptionClick} />
          </div>
          <div className='dashboard'>
            <SellerView selectedOption={selectedOption} />
          </div>
        </div>
        <Footer/>
    </div>
  )
}
