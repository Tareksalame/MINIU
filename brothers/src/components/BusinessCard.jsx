import React from 'react'
import Header from './Header'
import Footer from './Footer'
import downArrow from '../images/down-arrow.png'
import makeCard from '../images/buttons/button3.svg'
import { useNavigate } from 'react-router-dom'

export default function BusinessCard() {
    let nav = useNavigate()
  return (
    <div className='mainPageMainDiv'>
        <Header/>
            <div id='businessCard1'>
                <h1>بطاقة عمل رقمية احترافية</h1>
            </div>
            <div id='businessCard2'>
                <h1 className='h1BusinessCard'>صاحب مشروع ؟</h1>
                <h1 className='h1BusinessCard'>محاسب ؟</h1>
                <h1 className='h1BusinessCard'>محامي ؟</h1>
                <h1 className='h1BusinessCard'>لديك موقع انترنت ؟</h1>
                <h1 className='h1BusinessCard' style={{borderTop:'5px solid white',borderTopRightRadius:'10%',borderTopLeftRadius:'10%',borderBottom:'5px solid white',borderBottomRightRadius:'10%',borderBottomLeftRadius:'10%',width:'100%',marginTop:'5%'}}>تعال لندلك على خارطة الطريق لتطوير مشروعك </h1>
                <a style={{marginTop:'10%'}} href="#businessCard4">
                    <img width={'20%'} src={downArrow} alt="down arrow" />
                </a>
            </div>
            <div id='businessCard3'>
            <h1 className='h1BusinessCard' style={{marginBottom:'20px'}}> لماذا احتاج<br />بطاقة العمل الرقمية ؟</h1>
            <h3 className='h3HomeMainTitle'>التواصل السهل مع مشروعك - زر الاتصال ✅</h3>
            <h3 className='h3HomeMainTitle'>WhatsApp تسهيل التواصل عبر ✅</h3>
            <h3 className='h3HomeMainTitle'>مشاركة بطاقة العمل عبر وسائل التواصل الاجتماعي ✅</h3>
            <h3 className='h3HomeMainTitle'> رابط لموقعك الخاص ✅</h3>
            <h3 className='h3HomeMainTitle'>Waze رابط ذكي لموقع مشروعك على تطبيق ✅</h3>
            </div>
            <div id='businessCard4'>
                <h1>كيف ابدأ بانشاء بطاقة العمل الخاصة بي</h1>
                <img width={'10%'} className='downArrowAnimation' src={downArrow} alt="down arrow"/>
            </div>
            <div className='steps'>
                <h1 className='stepsNumbers'>1</h1>
                <h1 className='stepsH1'>التسجيل في الموقع</h1>
                <h3  className='stepsH3'>عند الضغط على زر "طلب بطاقة عمل رقمية" سيطلب منكم تعبئة بعض التفاصيل المهمة عن مشروعكم لنتمكن من استخدامها في تطويرنا للبطاقة الرقمية</h3>
            </div>
            <div className='steps'>
                <h1 className='stepsNumbers'>2</h1>
                <h1 className='stepsH1'>يتم التواصل معكم</h1>
                <h3  className='stepsH3'>خلال 3 ايام عمل يتم التواصل معكم للتاكد من جميع التفاصيل التي تم تعبئتها والاجابة على جميع استفساراتكم</h3>
            </div>
            <div className='steps'>
                <h1 className='stepsNumbers'>3</h1>
                <h1 className='stepsH1'>اتمام عملية الدفع</h1>
                <h3  className='stepsH3'>بعد الانتهاء من مرحلة التاكد من التفاصيل، والاجابة عن جميع الاستفسارات، نقوم باتمام عملية الدفع حسب الطريقة الملائمة لكم</h3>
            </div>
            <div className='steps'>
                <h1 className='stepsNumbers'>4</h1>
                <h1 className='stepsH1'>البدء في العمل وتطوير مشروعك</h1>
                <h3  className='stepsH3'>خلال 7 ايام عمل من يوم المكالمة الاولى سوف تتلقى مكالمة اخرى، ورسالة فيها الرابط الخاص ببطاقة العمل الخاصة بك </h3>
            </div>
            <img onClick={()=>{nav('/BusinessCard')}} className='makeCard' style={{marginTop:'20px',marginBottom:'20px'}} src={makeCard} alt="makeCard" />
        <Footer/>
    </div>
  )
}
