import React from 'react'
import '../styles/customersidebar.css'

export default function DashboardMenue({ onOptionClick }) {//called from productPage

  const handleOptionClick = (option) => {
    onOptionClick(option);
  };

  return (
    <div className='sideBar'>

        <div className='category'>
          <h3>CATEGORIES</h3>
          <ul>
            <li onClick={() => handleOptionClick('Woodwork')}>Woodwork</li>
            <li onClick={() => handleOptionClick('Metalwork')}>Metalwork</li>
            <li onClick={() => handleOptionClick('Textiles')}>Textiles</li>
            <li onClick={() => handleOptionClick('Pottery and Ceramics')}>Pottery and Ceramics</li>
            <li onClick={() => handleOptionClick('Basketry')}>Basketry</li>
            <li onClick={() => handleOptionClick('Bamboo and Reed Craft')}>Bamboo and Reed Craft</li>
            <li onClick={() => handleOptionClick('Traditional Batiks')}>Traditional Batiks</li>
            <li onClick={() => handleOptionClick('Traditional Masks')}>Traditional Masks</li>
          </ul>
        </div>
        <div className='filterbyPrice'>

          <h3>Filter By Price</h3>
          <input
            type="range"
            min="650"
            max="20000"
            value={1}
            style={{ width: '100%', color: "black"}}/>

          <label style={{ paddingLeft: '19px',fontSize:'108%'}}>Price: LKR 650 - LKR 20,000</label>
        </div>
    </div>
  )
}

