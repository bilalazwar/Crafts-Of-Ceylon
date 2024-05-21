import React from 'react'
import '../styles/sidebar.css'
import { Link } from 'react-router-dom'

export function UserProfileSideBar({ onOptionClick }) {

  const handleOptionClick = (option) => {
    onOptionClick(option);
  };

  return (
    <div className="sideBar">

        <div className='options'>

          <h3>DASHBOARD</h3>
          <div className='sidebarNavLinks'>
          <Link onClick={() => handleOptionClick('My Orders')}>My Orders</Link>
          <Link onClick={() => handleOptionClick('Account Details')}>Account Details</Link>
          </div>
        </div>

    </div>
  )
}

export function SellerProfileSideBar({ onOptionClick }) {

  const handleOptionClick = (option) => {
    onOptionClick(option);
  };

    return (
      <div className="sideBar">
  
          <div className='options'>
  
            <h3>DASHBOARD</h3>
            <div className='sidebarNavLinks'>
              <Link onClick={() => handleOptionClick('New Product')}>New Product</Link>
              <Link onClick={() => handleOptionClick('My Products')}>My Products</Link>
              <Link onClick={() => handleOptionClick('Order')}>Order</Link>
              <Link onClick={() => handleOptionClick('Sales')}>Sales</Link>
              <Link onClick={() => handleOptionClick('Account Details')}>Account Details</Link>
            </div>
          </div>
  
      </div>
    )
  }