import React from 'react'
import {NavigationBar1} from '../components/NavigationBar'
import Footer from '../components/Footer';
import '../styles/about.css'

export default function About() {
  return (
    <div>
      <NavigationBar1/>
      <div className='aboutBackgroundPage'>

        <h1>About us</h1>
        <p>"Crafting Traditions, Connecting Hearts, Where the Past Meets the Present to Preserve Sri Lanka's Rich Heritage."</p>
      </div>

      <div className='aboutContent'>
        <div className="flex-container">
          <div className="flex-item">
            <div className='image1'/>
            <p style={{textAlign: "center", fontWeight:"bold", fontSize:"20px", marginTop:"20px"}}>
              What We Really Do?
            </p>
            <p style={{textAlign:"center", margin:"15px", fontSize:"20px"}}>
              "At Crafts of Ceylon, we are on a mission to bridge the gap between artisans and admirers of Sri Lankan craftsmanship. 
              We provide a dedicated platform where skilled artisans can showcase and sell their handmade treasures to a global audience. 
              We connect customers with the rich and authentic heritage of Sri Lankan handicrafts, offering an immersive shopping experience 
              filled with culture, tradition, and artistry."
            </p>
          </div>
          <div className="flex-item">
            <div className='image2'/>
            <p style={{textAlign: "center", fontWeight:"bold", fontSize:"20px", marginTop:"20px"}}>
              Our Vision
            </p>
            <p style={{textAlign:"center", margin:"15px", fontSize:"20px"}}>
              "Our vision is to become the ultimate destination for Sri Lankan craftsmanship, a place where artisans thrive, 
              customers discover the beauty of tradition, and our rich cultural heritage is celebrated and preserved. 
              We aim to be the go-to platform that empowers local artisans, contributes to their economic well-being, 
              and enriches the lives of customers by offering a curated selection of genuine Sri Lankan handicrafts."
            </p>
          </div>
          <div className="flex-item">
            <div className='image3'/>
            <p style={{textAlign: "center", fontWeight:"bold", fontSize:"20px", marginTop:"20px"}}>
              Cultural Impact
            </p>
            <p style={{textAlign:"center", margin:"15px", fontSize:"20px"}}>
              "At Crafts of Ceylon, we take pride in our role in preserving and promoting Sri Lankan culture. 
              By providing a platform for artisans to showcase their traditional creations, we ensure that the skills and 
              artistry passed down through generations continue to thrive. Our commitment to cultural impact extends to enriching 
              the lives of customers and enhancing the cultural experience of all those who appreciate the beauty of Sri Lankan heritage."
            </p>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
