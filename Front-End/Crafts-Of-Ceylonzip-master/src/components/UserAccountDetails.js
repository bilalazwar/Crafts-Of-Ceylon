import React from 'react';
import { useState } from 'react';
import '../styles/accountDetails.css';
import { useEffect } from 'react';
import { loginCusId } from '../pages/LoginCustomer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AccountDetails({selectedOption}) {
    const [name,setName] = useState('');
    const [email,setemail] = useState('');
    const [mobileNumber,setmobileNumber] = useState('');
    const [username,setUsername] = useState('');
    const [address,setAddress] = useState('');

    const [password,setPassword] = useState('');
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const id = loginCusId;

    const [sellerOrder, setSellerOrder] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getOrders();
    },[]);

    const getOrders = async () => {
        const cusOrder = await axios.get(`http://localhost:8081/order/getOrder/${id}`);
        setSellerOrder(cusOrder.data);
    }


    useEffect(() => {
        getDetails();
    },[]);

    const getDetails = () => {
        axios.get(`http://localhost:8081/customer/getCustomer?id=${id}`) //gets all details 
        .then(response => {
            setName(response.data.name);
            setemail(response.data.email);
            setmobileNumber(response.data.mobileNumber);
            setAddress(response.data.address);
        })
        .catch(error => {
        });

        axios.get(`http://localhost:8081/customer/getCustomerLogin?id=${id}`) //gets username
        .then(response => {
            setUsername(response.data.username);
            setOldPassword(response.data.password);//to use when comparing old and user entered password
        })
        .catch(error => {
        });
    }

    const handleAccountDetailsUpdate = () =>{
        axios.put(`http://localhost:8081/customer/updateCustomer?id=${id}`,{
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
            axios.put(`http://localhost:8081/customer/updateCustomerlogin?id=${id}`,{
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

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
      };


  return (

    <div>
      {(!selectedOption || selectedOption === 'Account Details') && (
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
                    <input type="text" value={username} id="txtusername" name='txtusername'autoComplete='off' onChange={(e) => setUsername(e.target.value)} required/>

                    <label htmlFor="txtsecondaryaddress">Address*</label>
                    <input type="text" value={address} id="txtsecondaryaddress" name='txtsecondaryaddress'autoComplete='off' onChange={(e) => setAddress(e.target.value)} required/>

                    <input type='submit' value="Continue" id='btnUpdateProfile'/>

                </form>
            </div>

            <div className='navRight'>
                <label className='titleResetPassword'>RESET PASSWORD</label>
                <form onSubmit={handleResetPassword}>
                    <label htmlFor="txtusername">Current Password*</label>
                    <input type="text" value={password} id="txtresetusername" name='txtusername'autoComplete='off' onChange={(e) => setPassword(e.target.value)} required/>

                    <label htmlFor="txtpassword">New Password*</label>
                    <input type="password" value={newPassword} id="txtpassword" name='txtpassword'autoComplete='off' onChange={(e) => setNewPassword(e.target.value)} required/>

                    <label htmlFor="txtconfirmpassword">Confirm New Password*</label>
                    <input type="password" id="txtconfirmpassword" name='txtconfirmpassword'autoComplete='off'/>

                    <input type='submit' value="Continue" id='btnResetPassword'/>

                </form>
            </div>
        </div>
      )}
      {selectedOption === "My Orders" && (

        <div className='orderDetails'>
        <div className='filter'>

        <input type="text" name="search" placeholder='Search..' autoComplete="off"/>
        <select>
            <option value="Category">Product</option> 
            <option>Database</option>
            <option>Search</option>
        </select>

        <select>
            <option value="filterBy">Filter By</option>
            <option>Price</option>
            <option>Product</option>
        </select>

        <div className='orderDetailsFromDatabase'>
            <div className='columnNames'>

            <table>
                <tbody>
                <tr>
                    <th>PRODUCT</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>DATE</th>
                </tr>
                
                {
                      sellerOrder.map((order,index)=>(
                        <tr> {/* Ensure key is on the outermost element */}
                        <React.Fragment key={index}>
                          <td>{order.productName}</td>
                          <td>{order.quantity}</td>
                          <td>{order.price}</td>
                          <td>{formatDate(order.orderDate)}</td>
                        </React.Fragment>
                      </tr>
                      ))
                    }
                </tbody>
            </table>
            </div>
        </div>
        </div>
        </div>
        )}
    </div>
  )
}

// {
//     sellerOrder.map((order,index)=>(
//     <tr key={index}> {/* Ensure key is on the outermost element */}
//     <React.Fragment>
//         <td>{order.productName}</td>
//         <td>{order.quantity}</td>
//         <td>{order.price}</td>
//         <td>{formatDate(order.orderDate)}</td>
//     </React.Fragment>
//     </tr>
//     ))
// }
