import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header, WhiteLine1, Footer } from '../components/UserManagment';
import '../styles/accountcreation.css'

export default function AccountCreation() {


    //same functions as in CreateCustomer
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [businessName, setBusinessName] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8083/seller/createSeller',{
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            address: address,
            businessName: businessName
        })
        .then(response =>{
        if(response.data){
            axios.post('http://localhost:8083/seller/recordCredentials',{
            id: response.data.id,
            password: password,
            username: username,
            })
            .then(response2 =>{
            if(response2.data === response.data.id){
                navigate("/seller")
            }
            else{
                alert("Please check your username and password.")
            }
        })
        }
        else{
            alert("Please check your details and try again.")
        }
        })
    }
    
    return (
      <div>
        <Header />
        <div className='userDetailsForm'>
            <form onSubmit={handleLogin}>
                <div className='formLeft'>

                    <label><b>Create account for seller</b></label><br/><br/>

                    <label htmlFor="txtFullName">Your name</label><br/>
                    <input type="text" id="txtFullName" name='name' autoComplete='off' onChange={(e) => setName(e.target.value)} required/><br/>

                    <label htmlFor="txtEmail">Email</label><br/>
                    <input type="email" id="txtEmail" name='email'autoComplete='off' onChange={(e) => setEmail(e.target.value)} required/><br/>

                    <label htmlFor="txtUsername">Username</label><br/>
                    <input type="text" id="txtUsername" name='username' autoComplete='off' onChange={(e) => setUsername(e.target.value)} required/><br/>

                    <label htmlFor="txtPassword">Passwrod</label><br/>
                    <input type="password" id="txtPassword" name='password' onChange={(e) => setPassword(e.target.value)} required/><br/>

                    <label htmlFor="">Re-enter password</label><br/>
                    <input type="password" id=""/><br/>

                    <input type='submit' value="Continue" id='btnSubmit'/>
                    <p>By continuing, you agree to Crafts of Ceylon’s <span>Conditions of Use</span><br/> and <span>Privacy Notice.</span></p>
                    <Link to="/loginseller" style={{color:"black", fontSize:"16px"}}>Already have an account?Log in.</Link>
                </div>
                <div className='formRight'>
                    <br/><br/>
                    <label htmlFor="mobile">Mobile Number</label><br/>
                    <input type="text" id="mobile" autoComplete='off' onChange={(e) => setMobileNumber(e.target.value)} required/><br/>
                    <label htmlFor="txtAddress">Address</label><br/>
                    <textarea id="txtAddress" rows="5" autoComplete='off' onChange={(e) => setAddress(e.target.value)} required/><br/>
                    <label htmlFor="txtBusinessName">Business Name</label><br/>
                    <input type="text" id="txtBusinessName" autoComplete='off' onChange={(e) => setBusinessName(e.target.value)} required/><br/>
                    
                </div>
            </form>
        </div>
        <WhiteLine1/>
        <Footer />
      </div>
    );
}
