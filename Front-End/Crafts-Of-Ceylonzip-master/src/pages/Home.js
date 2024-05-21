import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {NavigationBar1} from '../components/NavigationBar'
import Footer from '../components/Footer';
import Elephant from '../images/elephant.png';
import Drum from '../images/drum.png';
import Mask from '../images/mask.png';
import '../styles/home.css'

export default function Home() {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const renderHeading = (articleNumber) => {
        if (selectedLanguage === 'සිංහල') {
          switch (articleNumber) {
            case 1:
              return <h3>අලි ලී කැටයම්</h3>;
            case 2:
              return <h3>ලෙදර් හම්ප්ටීස්</h3>;
            case 3:
                return <h3>සාම්ප්රදායික ලී මාස්ක්</h3>;
            // Add cases for other articles as needed
            default:
              return <h3>Unknown Article</h3>;
          }
        } else {
          switch (articleNumber) {
            case 1:
              return <h3>Elephant Woodcarvings</h3>;
            case 2:
              return <h3>Leather Humpties</h3>;
            case 3:
                return <h3>Traditional Wooden Mask</h3>;
            // Add cases for other articles as needed
            default:
              return <h3>Unknown Article</h3>;
          }
        }
      };

      const renderParagraph = (articleNumber) => {
        if (selectedLanguage === 'සිංහල') {
          switch (articleNumber) {
            case 1:
              return <p>අලි ලී කැටයම් යනු ජනප්‍රිය ශ්‍රී ලාංකීය හස්ත කර්මාන්තයක් වන අතර, දේශීය දැව වලින් සාදන ලද සහ ආගමික සහ අලංකාර සැකසුම් සඳහා භාවිතා වේ. ඔවුන් විවිධ ඉරියව්වලින් අලි ඇතුන් නිරූපණය කරන අතර සංකීර්ණ රටා වලින් සරසා ඇත, බොහෝ විට වර්ණවත් වර්ණවලින් වර්ණාලේප කර ඇත. සාම්ප්‍රදායික ශිල්පීය ක්‍රම පරම්පරා ගණනාවක් හරහා සම්ප්‍රේෂණය වී ඇති අතර සම්පූර්ණ කිරීමට මාස හෝ අවුරුදු ගත විය හැකිය. එකතුකරන්නන් සහ කලා ලෝලීන් විසින් ඉහළ ඉල්ලුමක් ඇති ශ්‍රී ලාංකික අලි ලී කැටයම් රට තුළ තෑගි සහ සැරසිලි ලෙස ද බහුලව භාවිතා වේ.</p>;
            case 2:
              return <p>උසස් තත්ත්වයේ සම් භාවිතා කරමින් දක්ෂ ශ්‍රී ලාංකික ශිල්පීන් විසින් අතින් සාදන ලද, Ceylon Leather Humpties කල් පවතින සහ සුවපහසු වේ. ඔවුන්ගේ සූක්ෂම සැලසුම ඕනෑම ජීවන අවකාශයකට අලංකාරයක් එක් කරයි, විවේකය සඳහා පරිපූර්ණ වූ සුඛෝපභෝගී ආසන අත්දැකීමක් සපයයි. ගුණාත්මකභාවය, කල්පැවැත්ම සහ අලංකාරය ඒකාබද්ධ කරමින්, මෙම අතිවිශිෂ්ට ලෙදර් හම්ප්ටි ඔබේ ගෘහ අලංකරණ එකතුවට විනෝදජනක එකතු කිරීමකි. ශ්‍රී ලංකාවේ ලෙදර් හම්ප්ටීස් සමඟ ඔබේ ජීවන අවකාශයේ වාතාවරණය ඉහළ නංවන්න.</p>;
            case 3:
                return <p>අතින් සාදන ලද ලී සාම්ප්‍රදායික වෙස් මුහුණු එකතුව සමඟ ශ්‍රී ලංකාවේ පොහොසත් සංස්කෘතික උරුමය අත්විඳින්න. සාම්ප්‍රදායික ශිල්පීය ක්‍රම භාවිතයෙන් දක්ෂ ශිල්පීන් විසින් සාදන ලද මෙම වෙස් මුහුණු ක්‍රියාකාරී පමණක් නොව අලංකාර කලා කෘති ද වේ. සෑම වෙස් මුහුණක්ම අද්විතීය කතාවක් පවසන අතර එය ශ්‍රී ලංකාවේ සංස්කෘතික උරුමය නියෝජනය කරයි.
                අපගේ එකතුවට ඕනෑම රසයකට ගැලපෙන පුළුල් පරාසයක මෝස්තර ඇතුළත් වේ. මෙම වෙස් මුහුණු උසස් තත්ත්වයේ ලී වලින් සාදා ඇති අතර ඒවා කල් පවතින හා කල් පවතින බව සහතික කරයි. ඔබේ නිවසට ශ්‍රී ලාංකීය සංස්කෘතියේ ස්පර්ශයක් එක් කරන්න, නැතහොත් අද දින සුවිශේෂී සාම්ප්‍රදායික කලා කෘතියක් සහිත විශේෂ කෙනෙකුට තෑගි කරන්න.</p>;
            // Add cases for other articles as needed
            default:
              return <h3>Unknown Article</h3>;
          }
        } else {
          switch (articleNumber) {
            case 1:
              return <p>Elephant wood carvings are a popular Sri Lankan handicraft, made from local hardwoods and used in religious and decorative settings. They depict elephants in various poses and are decorated with intricate patterns, often painted in vibrant colors. Traditional techniques have been passed down through generations and can take months or years to complete. Highly sought after by collectors and art lovers, Sri Lankan Elephant wood carvings are also commonly used as gifts and decorations in the country.</p>;
            case 2:
              return <p>Handcrafted by skilled Sri Lankan artisans using high-quality leather,Ceylon Leather Humpties are durable and comfortable. Theirsophisticated design adds elegance to any living space, providing aluxurious seating experience that's perfect for relaxation. Combiningquality, durability, and elegance, these exquisite leather humpties are amust-have addition to your home decor collection.Elevate your living space's ambiance with the Sri Lankan LeatherHumpties.</p>;
            case 3:
                return <p>Experience the rich cultural heritage of Sri Lanka with our stunning collection of handcrafted wooden traditional masks. Made by skilled artisans using traditional techniques, these masks are not only functional but also beautiful works of art. Each mask tells a unique story and is a representation of Sri Lanka's cultural heritage.
                Our collection includes a wide range of designs to suit any taste. These masks are made from high-quality wood, ensuring they are durable and long-lasting. Add a touch of Sri Lankan culture to your home or gift a special someone with a unique piece of traditional art today.</p>;
            // Add cases for other articles as needed
            default:
              return <h3>Unknown Article</h3>;
          }
        }
      };

  return (
    <div>
        <NavigationBar1/>
        <div className='loginSignin'>

            <h1>Explore The Craftsmanship of Sri Lanka's</h1>
            <h1>Finest Artisans</h1>
            <p>Experience the Fusion of Tradition and Innovation, <br/>Unearth Exceptional Handcrafted Creations</p>

            <div className='btns'>
                <label id='btnLog'><Link to="/logincustomer">Log in</Link></label>
                <label id='btnSign'><Link to="/createcustomer">Sign Up</Link></label>
            </div>
            
        </div>
        <div className='announcement-container'>
            <div className='announcement'>
                <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
                <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
                <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
                <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
            </div>
        </div>
        <div className='productArticle'>
            <div>
                <select onChange={(e) => setSelectedLanguage(e.target.value)}>
                    <option>English</option>
                    <option>සිංහල</option>
                </select>
            </div>

            <div className='articleOne'>
                <div className='columnOne'>
                    <img src={Elephant} alt="" id='imgEle' />
                </div>

                <div className='columnTwo'>
                    {renderHeading(1)}
                    {renderParagraph(1)}
                    {/* <p>Elephant wood carvings are a popular Sri Lankan handicraft, made from local hardwoods and used in religious and decorative settings. They depict elephants in various poses and are decorated with intricate patterns, often painted in vibrant colors. Traditional techniques have been passed down through generations and can take months or years to complete. Highly sought after by collectors and art lovers, Sri Lankan Elephant wood carvings are also commonly used as gifts and decorations in the country.</p> */}
                </div>
            </div>

            <div className='articleTwo'>
                 <div className='columnTwo'>
                    {renderHeading(2)}
                    {/* <p>Handcrafted by skilled Sri Lankan artisans using high-quality leather,Ceylon Leather Humpties are durable and comfortable. Theirsophisticated design adds elegance to any living space, providing aluxurious seating experience that's perfect for relaxation. Combiningquality, durability, and elegance, these exquisite leather humpties are amust-have addition to your home decor collection.Elevate your living space's ambiance with the Sri Lankan LeatherHumpties.</p> */}
                    {renderParagraph(2)}
                </div>
                <div className='columnOne'>
                    <img src={Drum} alt="" id='imgDrum'/>
                </div>
            </div>

            <div className='articleThree'>
                <div className='columnOne'>
                    <img src={Mask} alt="" id='imgMask'/>
                </div>

                <div className='columnTwo'>
                    {renderHeading(3)}
                    {/* <p>Experience the rich cultural heritage of Sri Lanka with our stunning collection of handcrafted wooden traditional masks. Made by skilled artisans using traditional techniques, these masks are not only functional but also beautiful works of art. Each mask tells a unique story and is a representation of Sri Lanka's cultural heritage.
Our collection includes a wide range of designs to suit any taste. These masks are made from high-quality wood, ensuring they are durable and long-lasting. Add a touch of Sri Lankan culture to your home or gift a special someone with a unique piece of traditional art today.</p> */}
                    {renderParagraph(3)}
                </div>
            </div>
            
        </div>    
        <Footer/>    
        {/* <FirebaseImageUpload/>    */}

    </div>
  )
}