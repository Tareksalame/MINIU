import React from 'react'
import Header from './Header'
import Footer from './Footer'
import downArrow from '../images/down-arrow.png'
import makeCard from '../images/makebusinesscard.svg'
import { useNavigate } from 'react-router-dom'

export default function BusinessCard() {
    let nav = useNavigate()
  return (
    <div className='mainPageMainDiv'>
        <Header/>
            <div id='businessCard1'>
                <h1>כרטיס ביקור דיגיטלי מקצועי</h1>
            </div>
            <div id='businessCard2'>
                <h1 className='h1BusinessCard'>? בעל עסק </h1>
                <h1 className='h1BusinessCard'>? רואה חשבון</h1>
                <h1 className='h1BusinessCard'>? עורך דין </h1>
                <h1 className='h1BusinessCard'>? יש לך חנות באינטרנט </h1>
                <h1 className='h1BusinessCard' style={{borderTop:'5px solid white',borderTopRightRadius:'10%',borderTopLeftRadius:'10%',borderBottom:'5px solid white',borderBottomRightRadius:'10%',borderBottomLeftRadius:'10%',width:'100%',marginTop:'5%'}}>בוא נגיד לך איך מתחילים לקדם את העסק שלך עם כרטיס הביקור הדיגיטלי</h1>
                <a style={{marginTop:'10%'}} href="#businessCard4">
                    <img width={'20%'} src={downArrow} alt="down arrow" />
                </a>
            </div>
            <div id='businessCard3'>
            <h1 className='h1BusinessCard' style={{marginBottom:'20px'}}> למה אני צריך את <br />? כרטיס הביקור</h1>
            <h3 className='h3HomeMainTitle'>חיוג מהיר לעסק שלך - לחצן חיוג✅</h3>
            <h3 className='h3HomeMainTitle'>WhatsApp שליחת הודעת ✅</h3>
            <h3 className='h3HomeMainTitle'>שיתוף כרטיס הביקור הדיגיטלי✅<br /> ברשתות חברתיות </h3>
            <h3 className='h3HomeMainTitle'> קישור לאתר שלך✅</h3>
            <h3 className='h3HomeMainTitle'>של העסק Waze קישור חכם ל✅</h3>
            <h3 className='h3HomeMainTitle'>  (לידים) טופס יצירת קשר✅</h3>
            </div>
            <div id='businessCard4'>
                <h1>תהליך יצירת כרטיס הביקור החכם שלי</h1>
                <img width={'10%'} className='downArrowAnimation' src={downArrow} alt="down arrow"/>
            </div>
            <div className='steps'>
                <h1 className='stepsNumbers'>1</h1>
                <h1 className='stepsH1'>נרשמים במערעת</h1>
                <h3  className='stepsH3'>בלחיצה על ״יצירת כרטיס ביקור״ יהיה עליכם להזין כמה פרטים ולינקים רלוונטים לעסק שלכם</h3>
            </div>
            <div className='steps'>
                <h1 className='stepsNumbers'>2</h1>
                <h1 className='stepsH1'>יוצרים איתכם קשר</h1>
                <h3  className='stepsH3'>תוך 1-2 ימי עסקים ניצור איתכם קשר כדי לוודא איתכם מכל הפרטים שהזנתם</h3>
            </div>
            <div className='steps'>
                <h1 className='stepsNumbers'>3</h1>
                <h1 className='stepsH1'>מבצעים תשלום</h1>
                <h3  className='stepsH3'>אותו נציג שסוגר איתכם פינת הפרטים משלים איתכם את תהליך הרכישה</h3>
            </div>
            <div className='steps'>
                <h1 className='stepsNumbers'>4</h1>
                <h1 className='stepsH1'>מתחילים לקדם את העסק</h1>
                <h3  className='stepsH3'>תוך 6-7 ימי עסקים תקבלו קישור לכרטיס הביקור שלכם ותוכלו לשתף אותו ברשתות החברתיות</h3>
            </div>
            <img onClick={()=>{nav('/BusinessCard')}} className='makeCard' style={{marginTop:'20px',marginBottom:'20px'}} src={makeCard} alt="makeCard" />
        <Footer/>
    </div>
  )
}
