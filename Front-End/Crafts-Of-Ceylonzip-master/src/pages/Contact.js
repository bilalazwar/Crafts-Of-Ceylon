import React from 'react'
import {NavigationBar1} from '../components/NavigationBar'
import Footer from '../components/Footer';


export default function Contact() {
  return (
    <div>
        <NavigationBar1/>
        {/* <PageStart image={Call} heading="Contact Us"/> */}
        <div style={{height:"99vh", paddingLeft:"130px", paddingTop:"50px", paddingRight:"130px", paddingBottom:"50px"}}>
            <h4 style={{fontSize:"180%" , marginBottom:"14px"}}>Leave us a Message</h4>
            <hr/>
            <p style={{fontSize:"140%"}}>How can we help? We are always ready to assist our customers with friendly and knowledgeable advice and fast response times. If you need any assistance, please email to <span style={{fontWeight:"bold"}}>CoCeylon@gmail.lk</span> or send us a message using the below form.</p>

            <h4 style={{fontSize:"160%", marginBottom:"14px", marginTop:"14px"}}>Contact Form</h4>

            <div style={{ border: '4px solid rgb(133, 132, 132)', width:"830px", borderRadius:"10px"}}>
                <form style={{ margin:"50px", fontSize:"115%" ,display:"flex", flexDirection:"column"}}>
                    <div>
                        <div style={{display:"flex"}}>
                            <div style={{marginRight:"80px",display:"flex", flexDirection:"column"}}>
                                <label  style={{ marginBottom:"5px"}}>First Name*</label>
                                <input type='text' style={{ width: '300px', padding:"7px", borderRadius:"7px", border: "1px rgb(133, 132, 132) solid"}} />
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <label style={{ marginBottom:"5px"}}>Last Name</label>
                                <input type='text' style={{ width: '300px' , padding:"7px", borderRadius:"7px", border: "1px rgb(133, 132, 132) solid"}} />
                            </div>
                        </div>
                    </div>
                    <div style={{ display:"flex", flexDirection:"column"}}>
                        <label style={{ marginBottom:"5px",marginTop:"12px"}}>Email*</label>
                        <input type='text' style={{ width: '300px' , padding:"7px" , borderRadius:"7px" , border: "1px rgb(133, 132, 132) solid"}} />

                        <label style={{ marginBottom:"5px",marginTop:"12px"}}>Contact Number*</label>
                        <input type='text' style={{ width: '300px' , padding:"7px" , borderRadius:"7px" , border: "1px rgb(133, 132, 132) solid"}} />

                        

                        <label style={{ marginBottom:"5px",marginTop:"12px"}}>Inquiry Type*</label>

                        <div style={{ display:"flex", flexDirection:"row"}}>
                            <label style={{ marginLeft:"10px", opacity:"0.8"}}><input type='radio' name='inquiryType' /> Complaint</label>
                            <label style={{ marginLeft:"10px" , opacity:"0.8"}}><input type='radio' name='inquiryType' /> Payment Issue</label>
                            <label style={{ marginLeft:"10px" , opacity:"0.8"}}><input type='radio' name='inquiryType' /> Suggestion</label>
                        </div>

                        <label style={{ marginBottom:"5px",marginTop:"12px"}}>Message*</label>
                        <textarea rows="5" cols="95" style={{ resize: "none" , padding:"7px", borderRadius:"7px" , border: "1px rgb(133, 132, 132) solid"}}></textarea>

                    </div>
                </form>
            </div>
            <button type='submit' style={{border:"none",width:"400px", height:"47px", marginTop:"25px", borderRadius:"5px" , backgroundColor:"rgba(236, 118, 66, 255)", fontSize:"16px", color:"white",}} onMouseOver={(e) => (e.target.style.color = 'black')} onMouseOut={(e) => (e.target.style.color = 'white')}>Send Message</button>

        </div>
        <Footer/>
    </div>
  )
}












// import React from 'react'
// import {NavigationBar1} from '../components/NavigationBar'
// import Footer from '../components/Footer';
// import '../styles/contact.css'

// export default function Contact() {
//   return (
//     <div>
//         <NavigationBar1/>
//         <div className='callUs'>
//             <h1>Call Us</h1>
//         </div>
//         <div className='fillingForm'>
            
//         </div>

//         <Footer/>
//     </div>
//   )
// }
