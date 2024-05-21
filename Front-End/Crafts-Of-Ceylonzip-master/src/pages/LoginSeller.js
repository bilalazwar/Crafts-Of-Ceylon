import React, { useState } from 'react'
import { Header, WhiteLine1, Footer } from '../components/UserManagment';
import '../styles/sellerLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export var loginSelId;


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8083/seller/verifySeller',{
      username: username,
      password: password
    })
    .then(response =>{
      if(response.data){
        loginSelId = response.data.id
        navigate("/seller")
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
                    <label Sign in style={{fontSize:"23px", marginBottom:"30px"}}><b>Sign in as a seller</b></label>

                    <label htmlFor="txtUsername" style={{marginBottom:"10px"}}>Username</label>
                    <input type="text" id="txtUsername" name='username' autoComplete='off' onChange={(e) => setUsername(e.target.value)} required/>

                    <label htmlFor="txtPassword" style={{marginBottom:"10px"}}>Password</label>
                    <input type="password" id="txtPassword" name='password' autoComplete='off' onChange={(e) => setPassword(e.target.value)} required/>
                    <Link to="/forgotpassword" id='lblForgotPass'>Forgot Username or Password?</Link>

                    <input type="submit" value="Sign in"  id='btnLogin'/>
                    <Link to="/createseller" id='createSeller' style={{}}>Create a new account?</Link>


                </div>
                <div>
                  
                </div>
                
            </form>
            
        </div>
        <WhiteLine1/>
        <Footer/>
    </div>
  )
}
