import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import {NavigationBar3} from '../components/NavigationBar';
import {Footer} from '../components/UserManagment';
import Elephant from '../images/elephant.png';
import Card2 from '../images/card2.png';
import '../styles/checkout.css'
import { productName, productPrice, productCategory } from '../components/ProductView';
import { loginCusId } from './LoginCustomer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { imageSrc } from '../components/ProductView';


export default function CheckOut() {

    const [imagePreview, setImagePreview] = useState(null);
    useEffect(() => {
    // Set the Imported Image Here
    setImagePreview('../images/addImage2.png');
    }, []);

    const [quantity, setQuantity] = useState(1);
    const [orderTotal, setOrderTotal] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [landMark, setLandMark] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');

    const unitPrice = productPrice;
    const shipping = 3750;

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10) || 0; // setting default value zero
        setQuantity(newQuantity);
    };
    const calculateTotalPrice = () => {
        return quantity * unitPrice;
    };

    const calculateOrderTotal = () => {                     // this return the Order's total( which includes shipping)
        return calculateTotalPrice() + shipping;
    };

    const date = format(new Date(), 'yyyy-MM-dd');
    const navigate = useNavigate();

    const handleOrder = () => {
        var confirmed = window.confirm("Are you sure to complete the order?")
        if(confirmed){
            axios.post('http://localhost:8081/order/placeOrder',{ //submits customer details into database 
            cusId: loginCusId,
            productName: productName,
            address: city,
            quantity: quantity,
            price: productPrice,
            orderDate: date
            })
            .then(response =>{
                if(response.data){
                    axios.post('http://localhost:8083/order/createOrder',{ //submits customer details into database 
                    customerName: fullName,
                    productName: productName,
                    address: city,
                    quantity: quantity,
                    price: productPrice,
                    orderDate: date,
                    status: "PENDING"
                    })
                    .then(response => {
                        if(response.data){
                            alert("Your order is placed Successfully!");
                            confirmed = window.confirm("Do you want to return to shopping?")
                            if(confirmed){
                                navigate(-1)
                            }
                        }
                    })
                }
            })
        }
    }

  return (
    <div>
        <NavigationBar3/>


        <div className='content'>

            <div className='cart'>
                <label style={{marginBottom:'10px', fontWeight:'bold'}}>1. CART</label>
                <label style={{marginBottom:'8px', marginLeft:'auto',cursor:'pointer'}}>x</label>

                    <div className='product1'>
                        <div className='productDetail1Image'>
                            <img src={`${process.env.PUBLIC_URL}/loadimages/${imageSrc}.png`} alt="Product - 01" />
                        </div>
                        <div className='productDetail1'>
                            <label id='productName' >{productName}</label>
                            <label id="productColor">Color: Brown</label>
                            <label id='productCategory' >Type: {productCategory}</label>
                            <label>QTY: <input type='number' onChange={handleQuantityChange} value={quantity} max={5} min={1}/>LKR <span id='productPrice'>{productPrice}</span></label>
                        </div>
                    </div>
                    
                    <div className='blackLine' style={{marginBottom:'25px'}}></div>
                    <div style={{marginBottom:'17px'}}>
                        <label>SUBTOTAL <span id='subTotal'>LKR {calculateTotalPrice()}</span></label>
                    </div>
                    <div style={{marginBottom:'11px'}}>
                        <label>Delivery</label>
                    </div>
                    <div>
                    <label style={{ display: 'flex', flexDirection: 'column',backgroundColor: 'rgb(252, 244, 241)', borderRadius:'5px'}} id='deliverySelect'>
                        <span style={{marginBottom: '10px',marginTop:'13px'}}>LKR 350</span>
                        <span>By Tuesday, 7 November <input type='radio' checked name='shippingOption' value='option1' style={{marginLeft: '120px'}}/></span>
                        <span style={{marginBottom:'12px'}}>Express, tracking</span>
                        
                    </label>
                    </div>                

            </div>
            <div className='deliveryAddress'>

                <label style={{marginBottom:'18px', fontWeight:'bold'}}>2. DELIVERY ADDRESS</label>

                <label htmlFor="txtFullName">Full Name*</label>
                <input type='text' value={fullName} id="txtFullName" autoComplete='off' onChange={(e) => setFullName(e.target.value)} required/>

                <label htmlFor="txtMobileNumber">Mobile Number*</label>
                <input type='number' value={mobileNumber} id="txtMobileNumber" autoComplete='off' onChange={(e) => setMobileNumber(e.target.value)} required/>

                <label htmlFor="Kalubowila">Landmark (Optional)*</label>
                <input type='text' value={landMark} id="txtLandMark" autoComplete='off' onChange={(e) => setLandMark(e.target.value)} required/>

                <label htmlFor="txtProvince">Province*</label>
                <input type='text' value={province} id="txtProvince" autoComplete='off' onChange={(e) => setProvince(e.target.value)} required/>

                <label htmlFor="txtCity">City*</label>
                <input type='text' value={city} id="txtCity" autoComplete='off' onChange={(e) => setCity(e.target.value)} required/>

                <label htmlFor="txtArea">Area*</label>
                <input type='text' value={area} id="txtArea" autoComplete='off' onChange={(e) => setArea(e.target.value)} required/>

                <label style={{marginTop:'12px', marginBottom:'8px', fontSize:'95%',opacity:'0.8'}}>Select label for effective delivery (Optional)</label>

                <div>
                    <button style={{backgroundColor:'rgba(236, 118, 66, 255)', color:'white',cursor:'pointer', padding:'8px 18px 8px 18px' , borderRadius:'8px', border: 'none', marginRight:'14px'}}>Home</button>
                    <button style={{backgroundColor:'rgba(236, 118, 66, 255)', color:'white',cursor:'pointer', padding:'8px 18px 8px 18px' , borderRadius:'8px', border: 'none'}}>Office</button>
                </div>
                <div className='checkboxTick'>
                    <label><input type='checkbox' checked/>Same Billing Address</label>
                    <label><input type='checkbox' checked/>Save Address</label>
                    <label><input type='checkbox' checked/>Create Account</label>
                </div>
                
            </div>
            <div className='column03'>

                <div className='paymentMethod'>

                    <label style={{fontWeight:'bold', marginBottom:'18px'}}>3. SELECT PAYMENT METHOD</label>

                    <label style={{marginBottom:'10px'}}>
                        <input type="radio" name="paymentMethod" value="payment" />
                        <span>Cash on delivery</span>
                    </label>
                    <label  style={{marginBottom:'18px'}}>
                        <input type="radio" name="paymentMethod" value="qr" />
                        <span>PayHere</span>
                    </label>
                    <img src={Card2} alt='Payment Types'/>
                    <p style={{opacity:'0.65'}}>Pay by Visa, MasterCard, AMEX, eZcash,<br/> mCash or Internet Banking via PayHere.</p>

                </div>
                <div className='orderSummary'>

                    <label style={{marginBottom:'18px', fontWeight:'bold'}}>3. ORDER SUMMARY</label>

                    <label><span id='qty' style={{margin:'0'}}>{quantity}</span> x {productName}<span id='product1Price'>LKR {calculateTotalPrice()}</span></label>

                    <div className='blackLine' style={{marginBottom:'25px'}}></div>

                    <label>Subtotal<span style={{marginLeft:'145px'}}>LKR {calculateTotalPrice()}</span></label>

                    <label style={{marginTop:'10px', marginBottom:'10px'}}>Shipping<span style={{marginLeft:'142px'}}>LKR 3750</span></label>

                    <label style={{backgroundColor:'rgb(209, 209, 209)', padding:'10px'}}>ORDER TOTAL<span style={{marginLeft:'103px'}}>LKR {calculateOrderTotal()}</span></label>

                </div>
                
                <button style={{backgroundColor:'rgba(236, 118, 66, 255)', color:'white', padding:'15px 18px 15px 18px' , borderRadius:'8px', border: 'none', marginTop:'17px', fontSize:'102%', cursor:'pointer'}} onClick={handleOrder}>COMPLETE ORDER</button>
            </div>

        </div>
        <Footer/>
    </div>
  )
}