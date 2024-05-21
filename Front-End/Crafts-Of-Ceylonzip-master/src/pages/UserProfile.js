import React from 'react'
import { NavigationBar2 } from '../components/NavigationBar'
import { UserProfileSideBar } from '../components/ProfileSideBar'
import AccountDetails from '../components/UserAccountDetails';
import { useState } from 'react';


export default function UserProfile() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
        <NavigationBar2/>
        <div className='productStartDiv' style={{display:"flex", width:"100%",margin:"0",padding:"0"}}>

            <div style={{flex:"25%"}}>
                <UserProfileSideBar onOptionClick={handleOptionClick}/>
            </div>
            <div style={{flex:"75%"}}>
              <AccountDetails selectedOption={selectedOption} />
            </div> 

        </div>
    </div>
  )
}
