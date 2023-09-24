import React from 'react'
import Header from './Header'
import Footer from './Footer'
import website1 from '../images/websites/website1.png'
import website2 from '../images/websites/website2.png'
import button1 from '../images/buttons/button1.svg'
import {useNavigate} from 'react-router-dom'
import downArrow from '../images/down-arrow.png'
import ball from '../images/websites/ball.png'
import basketball from '../images/websites/basket-ball.png'




export default function LandingPages() {

    let nav = useNavigate()
  return (
    <div id='LandingPageMainDiv'>
        <Header/>

        <div id='LPTitleDiv'>
        <h1  id='LPTitle'>
            مواقع انترنت وصفحات هبوط لاصحاب المشاريع
        </h1>
        <img className='LPFirstWebsiteImg' src={website1} alt="" />
        </div>
        <div id='LPSecondDiv'>
            <h3 id='LPSecondDivTitle'>
                صاحب مشروع ؟ محامي ؟ محاسب ؟ مدرب ؟ 
                <br />
                وحتى الان لا تمتلك موقع انترنت ؟
                <br /><br />
                نستطيع مساعدتك لتبدأ بتطوير مشروعك<br />
                لتتمكن ايضًا من خدمة عملائك بشكل افضل<br />
                سجل الان وسنتواصل معك 
            </h3>
        <img className='LPDownArrow' src={downArrow} alt="" />
            <img id='LPLetsStartButton' onClick={()=>{nav('/LandingPageSign')}} src={button1} alt="" />
        </div>
        <div id='LPThirdDiv'>
            <h3 id='LPThirdTitle'>كل مشروع في ايامنا الحالية يحتاج الى موقع انترنت لادارة المشروع بافضل طريقة<br />
             مدرسة كرة القدم، مدرب اللياقة البدنية، مدرب كرة السلة وكل انواع الرياضة <br />
             <br />
            سوق لمشروعك بشكل اوسع وأحصل على صفحة الهبوط الخاصة بك وبمشروعك 
            </h3>
        <img className='LPFirstWebsiteImg' src={website2} alt="" />
        <h1 id='LPTitle' style={{borderBottom:'0px'}}>لا تنتظر طويلًا ولا تضيع مزيد من الوقت<br />
            ! سجل الان وسنتواصل معك 
        </h1>
        <img className='LPDownArrow' src={downArrow} alt="" />
        <img  id='LPLetsStartButton' onClick={()=>{nav('/LandingPageSign')}} src={button1} alt="" />
        
        </div>
        <Footer/>
    </div>
  )
}
