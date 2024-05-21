import React, { useState } from 'react'
import { Header, WhiteLine1, Footer } from '../components/UserManagment';
import '../styles/customerLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export var loginCusId;

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/customer/verifyCustomer',{
        username: username,
        password: password
    })
    .then(response =>{
      if(response.data){
        loginCusId = response.data.id
        navigate("/user/product")
      }
      else{
        alert("Incorrect password or username please try again.")
      }
    })
  }

  return (
    <div>
        <Header/>
        <div className='loginForm'>
            <form onSubmit={handleLogin} method="post">
                <div className='userInputs'>
                    <label Sign in><b>Sign in as a customer</b></label><br/>

                    <label htmlFor="txtUsername">Username</label>
                    <input type="text" id="txtUsername" name='username' autoComplete='off' onChange={(e) => setUsername(e.target.value)} required/>

                    <label htmlFor="txtPassword">Password</label>
                    <input type="password" id="txtPassword" name='password' autoComplete='off' onChange={(e) => setPassword(e.target.value)} required/>
                    <Link to="/forgotpassword" id='lblForgotPass'>Forgot Password?</Link>

                    <input type="submit" value="Sign in" id='btnLogin'/>
                    <Link to="/createcustomer" id='createCustomer'>Create a new account?</Link>
                </div>
            </form>
        </div>
        <WhiteLine1/>
        <Footer/>
    </div>
  )
}
