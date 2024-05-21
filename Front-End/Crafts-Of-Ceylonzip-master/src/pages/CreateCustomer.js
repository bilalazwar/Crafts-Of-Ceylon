import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header, WhiteLine1, Footer } from '../components/UserManagment';
import '../styles/accountcreation.css'

export default function AccountCreation() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    axios.post('http://localhost:8081/customer/createCustomer',{ //submits customer details into database 
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      address: address
    })
    .then(response =>{
      if(response.data){
        axios.post('http://localhost:8081/customer/recordCredentials',{ //stores customer credentials
          password: password,
          username: username
        })
         .then(response2 =>{
          if(response2.data){//verifies if the customers login is not null
            alert("Account created Successfully!.")
            navigate("/user/product")
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

              <label><b>Create account for customer</b></label><br/><br/>

              <label htmlFor="txtFullName">Your name</label><br/>
              <input type="text" id="txtFullName" name='name' autoComplete='off' onChange={(e) => setName(e.target.value)} required/><br/>

              <label htmlFor="txtEmail">Email</label><br/>
              <input type="email" id="txtEmail" name='email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} required/><br/>

              <label htmlFor="txtMobileNumber">Mobile Number</label><br/>
              <input type="text" id="txtMobileNumebr" name='mobileNumber' autoComplete='off' onChange={(e) => setMobileNumber(e.target.value)} required/><br/>

              <label htmlFor="txtAddress">Address</label><br/>
              <textarea id="txtAddress" rows="5" autoComplete='off' onChange={(e) => setAddress(e.target.value)} required></textarea><br/>

              <input type='submit' value="Continue" id='btnSubmit'/>
              <p>By continuing, you agree to Crafts of Ceylon’s <span>Conditions of Use</span><br/> and <span>Privacy Notice.</span></p>
              <Link to="/logincustomer" style={{color:"black", fontSize:"16px"}}>Already have an account?Log in.</Link>
          </div>
          <div className='formRight'>
              <br/><br/>
              <label htmlFor="username">Username</label><br/>
              <input type="text" id="username" autoComplete='off' onChange={(e) => setUsername(e.target.value)} required/><br/>

              <label htmlFor="txtPassword">Password</label><br/>
              <input type="password" id="txtPassword" name='password' onChange={(e) => setPassword(e.target.value)} required/><br/>

              <label htmlFor="">Re-enter password</label><br/>
              <input type="password" id="" required/><br/>              
          </div>
          </form>
        </div>
        <WhiteLine1/>
        <Footer />
      </div>
    );
}
