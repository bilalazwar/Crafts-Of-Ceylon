import React from 'react'
import {NavigationBar1} from '../components/NavigationBar'
import Footer from '../components/Footer';

export default function NewFAQ() {
  return (
    <div>
      <NavigationBar1/>
      <div style={{display:"flex",height:"50vh", padding:"100px 100px 100px 220px"}}>

            <div style={{width:"30%", paddingLeft:"250px", borderRight:"2px solid black"}}>
                <h1 style={{fontFamily:"serif",fontSize:"420%",margin:"0"}}>FAQ</h1>
                <h4 style={{ paddingBottom:"14px"}}>Leave us a Message (Optional)</h4>
                <textarea rows="10" cols="55" style={{ resize: "none" , padding:"7px", borderRadius:"7px" , border: "1px rgb(133, 132, 132) solid", opacity:"0.9"}}></textarea>

            </div>
            <div style={{width:"40%" , paddingLeft:"100px"}}>

            <table style={{ borderCollapse: "collapse", width: "100%"}}>
              <tbody>
                <tr>
                    <td style={{padding: "8px" , textDecoration:"underline",marginLeft:"20px"}}>Question</td>
                    <td style={{padding: "8px" }}>How do I place an order?</td>
                </tr>
                <tr>
                    <td style={{ padding: "8px" , verticalAlign:"top" , textDecoration:"underline"}}>Response</td>
                    <td>
                        <ul style={{ padding:"24px"}}>
                            <li>Select the product you need to order and click add to cart button.</li>
                            <li>Click the cart button to check your orders you have made.</li>
                            <li>On the cart page first you have to finally check your order.</li>
                            <li>Second you have to fill your delivery address details.</li>
                            <li>Finally select your payment method and complete your order.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: "8px" , textDecoration:"underline"}}>Question</td>
                    <td style={{ padding: "8px" }}>Whom should i contact if i have any queries?</td>
                </tr>
                <tr>
                    <td style={{ padding: "8px" , textDecoration:"underline"}}>Response</td>
                    <ul style={{ padding:"24px"}}>
                        <li>You can call us on :  +94719090190  |  +9476123003</li>
                        <li>Or email :  CoCeylon@gmail.lk</li>
                    </ul>
                </tr>
                <tr>
                    <td style={{ padding: "8px" , textDecoration:"underline"}}>Question</td>
                    <td style={{ padding: "8px" }}>Do i need an account to place an order?</td>
                </tr>
                <tr>
                    <td style={{ padding: "8px", verticalAlign:"top" , textDecoration:"underline"}}>Response</td>
                    <ul style={{ padding:"24px"}}>
                        <li>Yes, you need to create an account before you place an order.</li>
                        <li>You can also create one when you are on the checkout page.</li>
                        <li>Having an account will allow you to get all offers and updates.</li>
                    </ul>
                </tr>
              </tbody>
            </table>                      
         </div>
        </div>
      <Footer/>
    </div>
  )
}
