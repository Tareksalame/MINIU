import React from 'react'
import Header from './Header'
import Footer from './Footer'
import website1 from '../images/websites/website1.png'
import website2 from '../images/websites/website2.png'
import button1 from '../images/button1.svg'
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
            אתרי אינטרנט ודפי נחיתה לאנשי העסקים ולעסקים שלהם
        </h1>
        <img className='LPFirstWebsiteImg' src={website1} alt="" />
        </div>
        <div id='LPSecondDiv'>
            <h3 id='LPSecondDivTitle'>
                ? בעל עסק ? עורך דין ? רואה חשבון ? מאמן 
                ? ועדיין אין לך אתר אינטרנט או דף נחיתה 
                <br /><br />
                ! אתה חייב לעשות את הצעד הגדול הזה 
                כדי לקחת את העסק שלך קדימה, ולהקל על הלקוחות שלך<br /><br />
                הירשם עכשיו וניצור איתך קשר 
            </h3>
        <img className='LPDownArrow' src={downArrow} alt="" />
            <img id='LPLetsStartButton' onClick={()=>{nav('/LandingPageSign')}} src={button1} alt="" />
        </div>
        <div id='LPThirdDiv'>
            <h3 id='LPThirdTitle'>? מאמן ? יש לך בית ספר לכדורגל/כדורסל/כדורעף ? בעל חדר כושר <br />
            ! גם את/אתה צריך אתר אינטרנט לניהול ורישום המשתתפים אצלך <br />
             וחייבים דף נחיתה כדי לשווק את <br />
             ! העסק שלכם יותר טוב 
            </h3>
        <img className='LPFirstWebsiteImg' src={website2} alt="" />
        <h1 id='LPTitle' style={{borderBottom:'0px'}}>!?! עד מתי תמשיך לחשוב <br />
            הירשם עכשיו וניצור איתך קשר
        </h1>
        <img className='LPDownArrow' src={downArrow} alt="" />
        <img  id='LPLetsStartButton' onClick={()=>{nav('/LandingPageSign')}} src={button1} alt="" />
        
        </div>
        <Footer/>
    </div>
  )
}
