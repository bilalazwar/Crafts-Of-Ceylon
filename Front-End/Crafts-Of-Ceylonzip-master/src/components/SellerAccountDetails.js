import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/accountDetails.css';
import { loginSelId } from '../pages/LoginSeller';

export default function AccountDetails() {

    const [name,setName] = useState('');
    const [email,setemail] = useState('');
    const [mobileNumber,setmobileNumber] = useState('');
    const [username,setUsername] = useState('');
    const [address,setAddress] = useState('');
    const [businessName,setbusinessName] = useState('');

    const [password,setPassword] = useState('');
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const id = loginSelId;

    const navigate = useNavigate();

    useEffect(() => {
        getDetails();
    },[]);

    const getDetails = () => {
        axios.get(`http://localhost:8083/seller/getSeller?id=${id}`)//gets all details
        .then(response => {
            setName(response.data.name);
            setemail(response.data.email);
            setmobileNumber(response.data.mobileNumber);
            setAddress(response.data.address);
            setbusinessName(response.data.businessName)
        })
        .catch(error => {
        });

        axios.get(`http://localhost:8083/seller/getSellerLogin?id=${id}`) //gets username
        .then(response => {
            setUsername(response.data.username);
            setOldPassword(response.data.password);//to use when comparing old and user entered password
        })
        .catch(error => {
        });
    }

    const handleAccountDetailsUpdate = () =>{
        axios.put(`http://localhost:8083/seller/updateSeller?id=${id}`,{
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            address: address
        })
        .then(response => {
            alert("Details updated Successfully!")
            
            navigate("/src/components/UserAccountDetails.js")
        })
        .catch(error => {
        });

    }

    const handleResetPassword = () =>{
        if(oldPassword === password){
            axios.put(`http://localhost:8083/seller/updateSellerLogin?id=${id}`,{
            username: username,
            password: newPassword //setting the new password
        })
        .then(response => {
            alert("password reset Successful.")
        })
        .catch(error => {
        });
        }
        else{
            alert("The password you is incorrect.")
        }
        
    }

  return (
    <div className='accountDatails'>

        <div className='navLefts'>
            <label className='titleDetails'>YOUR PROFILE DETAILS</label>
            <form onSubmit={handleAccountDetailsUpdate}>

                <label htmlFor="txtFullName">Your name*</label>
                <input type="text" value={name} id="txtFullName" name='name' autoComplete='off' onChange={(e) => setName(e.target.value)} required/>

                <label htmlFor="txtEmail">Email*</label>
                <input type="email" value={email} id="txtEmail" name='email'autoComplete='off' onChange={(e) => setemail(e.target.value)} required/>
                
                <label htmlFor="txtmobilenumber">Mobile Number*</label>
                <input type="number" value={mobileNumber} id="txtmobilenumber" name='txtmobilenumber'autoComplete='off' onChange={(e) => setmobileNumber(e.target.value)} required/>

                <label htmlFor="txtusername">Username*</label>
                <input type="text" value={username} id="txtusername" name='txtusername'autoComplete='off' onChange={(e) => setUsername  (e.target.value)} required/>

                <label htmlFor="txtdefaultaddress">Address*</label>
                <input type="text" value={address} id="txtdefaultaddress" name='txtdefaultaddress'autoComplete='off' onChange={(e) => setAddress(e.target.value)} required/>

                <label htmlFor="txtbusinessname">Business Name*</label>
                <input type="text" value={businessName} id="txtbusinessname" name='txtbusinessname'autoComplete='off' onChange={(e) => setbusinessName(e.target.value)} required/>

                <input type='submit' value="Continue" id='btnUpdateProfile'/>

            </form>
        </div>

        <div className='navRight'>
            <label className='titleResetPassword'>RESET PASSWORD</label>
            <form onSubmit={handleResetPassword}>
                <label htmlFor="txtusername">Current Password*</label>
                <input type="text" value={password} id="txtusername" name='txtusername'autoComplete='off' onChange={(e) => setPassword(e.target.value)} required/>

                <label htmlFor="txtpassword">New Password*</label>
                <input type="password" value={newPassword} id="txtpassword" name='txtpassword'autoComplete='off' onChange={(e) => setNewPassword(e.target.value)} required/>

                <label htmlFor="txtconfirmpassword">Confirm New Password*</label>
                <input type="password" id="txtconfirmpassword" name='txtconfirmpassword'autoComplete='off'/>

                <input type='submit' value="Continue" id='btnResetPassword'/>

            </form>
        </div>
    </div>
  )
}
