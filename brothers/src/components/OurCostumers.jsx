import React from 'react'
import Header from './Header'
import Footer from './Footer'
import whiteMenu from '../images/MINI-U-White.svg'
import aboJamel from '../images/abojameltours.svg'
import qatrElnada from '../images/qatrelnada.svg'
import facebook from '../images/abojamel/facebook (1).png'
import telegram from '../images/abojamel/telegram.png'
import telephone from '../images/abojamel/telephone-symbol-button.png'
import travel from '../images/abojamel/travel-luggage.png'
import whatsapp from '../images/abojamel/whatsapp (1).png'
import instaQN from '../images/QatrElnada/instagram.png'
import teleQN from '../images/QatrElnada/telephone-call.png'
import tikQN from '../images/QatrElnada/tiktok.png'
import wazeQN from '../images/QatrElnada/waze.png'
import whatsQN from '../images/QatrElnada/whatsapp.png'
import button2 from '../images/button2.svg'
import { Link, useNavigate } from 'react-router-dom'



export default function OurCostumers() {
    let nav = useNavigate()
  return (
      <div style={{position:'static'}} className='mainPageMainDiv'>
        <Header/>
        <h1 className='TitlesOurCustomersFull'>דוגמאות לתפריטים/כרטיסי ביקור שהלקוחות שלנו שדרגו את העסקים שלהם איתם</h1>

            <div id='showCustomers'>
                <h1 className='TitlesOurCustomers'>דוגמאות לתפריטים/כרטיסי ביקור שהלקוחות שלנו שדרגו את העסקים שלהם איתם</h1>
                <div className='scrollCustomerDiv'>
              <div id='abojamelHeader'>
                    <img width={'80%'} src={aboJamel} alt="" />
                    <h1 id='headerTitle'>عنوانك لحجز الرحلات داخل وخارج البلاد</h1>
        </div>
                    <div id="mainDivAboJamel">
   <div className="redirectDivs">
       <a className='aAboJamel'  >
           <h1 class="redirectTitles">احجز رحلتك</h1>
           <img src={travel} className='images' alt="" />
       </a>
   </div>
   <div className="redirectDivs">
       <a className='aAboJamel'  >
           <h1 className="redirectTitles">واتساب</h1>
           <img className='images' src={whatsapp} alt="" />
       </a>
   </div>
   <div className="redirectDivs">
       <a className='aAboJamel'  >
           <h1 className="redirectTitles"> تلجرام</h1>
           <img className='images' src={telegram} alt="" />
       </a>
   </div>
   <div className="redirectDivs">
       <a className='aAboJamel'  >
           <h1 className="redirectTitles">اتصل بنا </h1>
           <img className='images' src={telephone} alt="" />
       </a>
   </div>
   <div className="redirectDivs">
       <a className='aAboJamel' >
           <h1 className="redirectTitles">فيسبوك</h1>        
        <img className='images' src={facebook} alt="" />
       </a>
</div>
 <div onclick="website()" id="miniuDivAboJamel">
   <h3 id="designAboJamel">Designed By</h3>
   <img src={whiteMenu} width={'25%'} alt="" />
 </div>
              </div>
                </div>
                <div style={{backgroundColor:'black'}} className='scrollCustomerDiv'>
                    <header id='QatrElnadaHeader'>
                        {/* <!--- Welcome SECTION ---> */}
                        <img id='MainLogoQatrElnada' src={qatrElnada} alt="" />
                         <section  id="WelcomeQatrElnada">
                             <h1 class="welcomingQatrElnada">قطر الندى للعطور والروائح</h1>
                         </section>
                         <div id='menuDivQatrElnada'>
                        {/* <!-- Perfumes Div--> */}
                            <div class="InnerDivsQatrElnada">
                                <a id="whatsappQatrElnada">قائمة العطور البديلة</a>
                            </div>
                            <div id="LinksMainDivQatrElnada">
                        <div class="LinkDivs">
                            {/* <!-- WhatsApp Div--> */}
                            <a id="whatsappQatrElnada"> <img src={whatsQN} id="whatsappImg" alt="" /></a>
                        </div>
                        <div class="LinkDivs">
                            {/* <!-- Instagram Div--> */}
                            <a id="whatsappQatrElnada"><img src={instaQN} id="whatsappImg" alt="" /></a>
                        </div>
                        <div class="LinkDivs">
                            {/* <!-- Tiktok Div--> */}
                            <a id="whatsappQatrElnada"><img src={tikQN} id="whatsappImg" alt="" /></a>
                        </div>
                        <div class="LinkDivs">
                            {/* <!-- PhoneCall Div--> */}
                            <a id="whatsappQatrElnada"> <img src={teleQN} id="whatsappImg" alt="" /> </a>
                        </div>
                        <div class="LinkDivs">
                            {/* <!-- Waze Div--> */}
                            <a id="whatsappQatrElnada"> <img src={wazeQN} id="whatsappImg" alt="" /> </a>
                        </div>
                        </div>
                         </div>
                         <div onclick="website()" id="miniuDivAboJamel">
   <h3 id="designAboJamel">Designed By</h3>
   <img src={whiteMenu} width={'25%'} alt="" />
 </div>
                    </header>
                </div>
            </div>
        <div id='scrollDiv'>
        <h1 className='TitlesOurCustomersFull'>הלקוחות שלנו</h1>

            <h1 className='TitlesOurCustomers'>הלקוחות שלנו</h1>
            <div id='scrollContent'>
                <img style={{position:'static'}} className='ourCustomersBrands' src={aboJamel} alt="" />
                <img style={{position:'static'}} className='ourCustomersBrands' src={qatrElnada} alt="" />
                
            </div>
        </div>
        <img className='iWantToGrowUp' onClick={()=>{nav('/BusinessCard')}} src={button2} alt="" />
        <Footer/>
    </div>
  )
}