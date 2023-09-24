import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import MENUS from '../images/menushow.png'
import LANDINGPAGES from '../images/landingPage.png'
import menuRestaurant from '../images/menurestaurant.jpg'
import cream from '../images/cream.jpg'
import mousedown from '../images/mouse-cursor.png'
import danger from '../images/danger.png'
import scanme from '../images/scanme.jpeg'
import button1 from '../images/buttons/button1.svg'
import button2 from '../images/buttons/button2.svg'
import Footer from './Footer'


export default function FirstPage() {
  const[phoneNumber,setPhoneNumber] = useState('')
  const[phoneNumber2,setPhoneNumber2] = useState('')
  const[Name,setName] = useState('')
  const[Name2,setName2] = useState('')



  const menuSign = ()=>
  {
    fetch('/menuSign', 
            {
                headers:{
                    "Content-Type": "application/json"
                },
                method:'post',
                body:JSON.stringify({
                    name:Name,
                    phoneNumber:phoneNumber,
                    type:'Menu/Catalog'
                })
            }).then((res)=>{return res.json()})
            .then((data)=>
            {
              if(data == 'done')
              {
                setName('')
                setPhoneNumber('')
                alert('נהדר! ניצור איצכם קשר בהקדם האפשרי')
              }
              else
              {
                alert('לא נקלט תרענן את הדף ותנסה שוב')
              }
            }).catch((err)=>{return err})
  }

  const cardSign = ()=>
  {
    fetch('/cardSign', 
            {
                headers:{
                    "Content-Type": "application/json"
                },
                method:'post',
                body:JSON.stringify({
                    name:Name2,
                    phoneNumber:phoneNumber2,
                    type:'Business/Landing Page'
                })
            }).then((res)=>{return res.json()})
            .then((data)=>
            {
              if(data == 'done')
              {
                setName2('')
                setPhoneNumber2('')
                alert('נהדר! ניצור איתכם קשר בהקדם האפשרי')
              }
              else
              {
                alert('לא נקלט תרענן את הדף ותנסה שוב')
              }
            }).catch((err)=>{return err})
  }


  const nav = useNavigate()
  return (
    <div style={{position:"static"}} className='mainPageMainDiv'>
      <Header/>
      <div id='homeMainDiv'>
        <h1 className='h1HomeMainTitle'>صاحب مطعم ؟ عندك مشروع ؟ <br /> اجا الوقت تطور مشروعك </h1>
        <h1 className='h1HomeMainTitle' style={{marginBottom:'0px',color:'rgb(214, 194, 173)',fontWeight:'normal',background:'black',border:'5px solid black',borderRadius:'10px',width:'80%'}}>MINIU - اهلاً وسهلاً بكم في </h1>
        <h1 className='h1HomeMainTitle' style={{fontSize:'30px',fontWeight:'900'}}> قوائم رقمية، صفحات هبوط، بطاقات عمل رقمية 
لجميع اصحاب المشاريع </h1>
        <img src={MENUS} id='menusPhotoFirstPage' alt="" />
        <h3 className='h3HomeMainTitle'>توفير الوقت - لا حاجة لتوزيع القوائم للناس✅</h3>
        <h3 className='h3HomeMainTitle'>توفير النقود - لا حاجة لطباعة الكثير من القوائم✅</h3>
        <h3 className='h3HomeMainTitle'>   ملائم لكل انواع الهواتف والاجهزة ✅</h3>
        <h3 className='h3HomeMainTitle'>يمكنك من الانتشار اكثر في وسائل التواصل الاجتماعي✅</h3>
        <h3 className='h3HomeMainTitle'>تغيير واضافة تفاصيل للقائمة بدون الحاجة الى طبعة جديدة✅</h3>
        <h2 className='waisTime'>! اذًا بكفي تضيع وقت<br />
        طوٌر مشروعك الان مع <br /> القائمة الرقمية
        </h2>
        <img className='clickToSTartImage' src={button1} onClick={()=>{nav('/DigitalMenu')}} alt="" />
        <div id='menuAndCatalogDiv'>
        <img className='menuAndcatalog' src={menuRestaurant} alt="" />
        <img className='menuAndcatalog' src={cream} alt="" />
        </div>
        <div id='InformationAndQRCodeDiv'>
        <div id='informationsDiv'>
        <h1 className='h1HomeMainTitle' style={{fontSize:'25px',marginTop:'50px',paddingTop:'10px',paddingBottom:'10px',backgroundColor:'rgb(214, 194, 173)',borderRadius:'10px',padding:'2%'}}>!! اجا الوقت تطور مشروعك </h1>
        <h2 className='h2HomeMainTitle'>في العصر الجديد كلنا منعرف اهمية المواقع، وقدرتها على تسهيل الخدمات، وعشان انت تقدر تسهل على زبائنك، وتعطيهم الخدمة الافضل، لازم يكون عندك موقع، عالانترنت</h2>
        <h2 className='h2HomeMainTitle'>اذا كنت صاحب مطعم اجا الوقت بانك تطور القوائم الي بمطعمك لقوائم رقمية! 
بتقدر توفّر كثير من المصاري الي بتدفعها عالقوائم الورقية وغيرها  </h2>
        <h2 className='h2HomeMainTitle'>احنا موجودين عشان خدمتكم 24/7، ورح نكون مستعدين لكل اضافة او تغيير بتحبوا تضيفوه !</h2>
        </div>
        <div id='QRDiv'>
        <img src={scanme} id='QRImage' alt="" />
        <h3 className='h3HomeMainTitle' style={{alignSelf:'center',marginRight:'0px'}}> الصورة للمثال فقط 
</h3>
        <h2 className='h2HomeMainTitle' style={{marginBottom:'0px'}}>في حال طلبت قائمة رقمية لمحلك، راح تحصل على 5 قواعد لمسح ال </h2>
        <h2 className='h2HomeMainTitle' style={{marginTop:'0px'}} > QR Code</h2>
        </div>
        </div>
        <h1 className='h1HomeMainTitle' id='WhatAreYouWaitingFor' style={{marginBottom:'0px'}}> شو عم تستنوا معناها ؟</h1>
        <div style={{marginTop:'0px',marginBottom:'10px',padding:'0px'}}>
        <img src={danger} className='exclamationMark' style={{margin:'0px',padding:'0px'}} alt="exclamationMark" /> 
        <img src={danger} className='exclamationMark' style={{margin:'0px',padding:'0px'}} alt="exclamationMark" />
        <img src={danger} className='exclamationMark' style={{margin:'0px',padding:'0px'}} alt="exclamationMark" />
        <img src={danger} className='exclamationMark' style={{margin:'0px',padding:'0px'}} alt="exclamationMark" />
        <img src={danger} className='exclamationMark' style={{margin:'0px',padding:'0px'}} alt="exclamationMark" />
        <img src={danger} className='exclamationMark' style={{margin:'0px',padding:'0px'}} alt="exclamationMark" />
        </div>
        <h2 style={{margin:'0px'}} className='h2HomeMainTitle'>سجلوا الان </h2>
        <h2 style={{margin:'0px',marginBottom:'10px'}} className='h2HomeMainTitle'>واحنا رح نتواصل معكم </h2>
        <img src={mousedown} className='mouseDown' alt="mouseDown" />
        <input value={Name} onChange={(e)=>{setName(e.target.value)}} className='namePhoneInput' placeholder='الاسم الكامل/اسم المشروع' type="text" />
        <input value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} className='namePhoneInput' placeholder='رقم الهاتف' type="text" />
        <img className='iWantToGrowUp' onClick={menuSign} src={button2} alt="" />

      </div>
      <div style={{marginTop:'30px'}} id='landingPageDiv'>
        <h1 style={{fontSize:'30px',backgroundColor:'rgb(214, 194, 173)',padding:'3%'}} className='h1HomeMainTitle'>  بطاقة عمل رقمية احترافية !</h1>
        <h2 className='h2HomeMainTitle'>عندك مشروع ؟ حابب تسهّل على زبائنك وعلى نفسك الشغل ؟ سجّل وخلينا نتواصل معك لحتى نصمملك بطاقة عمل رقمية احترافية ! حسب التصميم الي بتفضله </h2>
        <img src={LANDINGPAGES} width={'95%'} alt="" />
        
        <h1 className='h1HomeMainTitle' style={{fontSize:'25px',borderTop:'10px solid rgb(214, 194, 173)',borderBottom:'10px solid rgb(214, 194, 173)',borderRight:'0px',borderLeft:'0px',borderStyle:'double',padding:'3%',borderRadius:'70px'}}>ايجابيات بطاقة العمل الرقمية </h1>
        <h3 className='h3HomeMainTitle'>اتصال سريع - زر الاتصال ✅</h3>
        <h3 className='h3HomeMainTitle'>التواصل عبر واتساب بسهولة ✅</h3>
        <h3 className='h3HomeMainTitle'>مشاركة بطاقة العمل الرقمية على مواقع التواصل ✅<br />الاجتماعي مما يسهل على زبائنك العثور عليك</h3>
        <h3 className='h3HomeMainTitle'> رابط لموقعك الخاص ✅</h3>
        <h1 className='h1HomeMainTitle' style={{fontSize:'30px',marginBottom:'0px'}}>اطلب الان البطاقة الرقمية الخاصة فيك </h1>
        <img className='mouseDown' src={mousedown} alt="" />
        <img className='iWantToGrowUp' onClick={()=>{nav('/BusinessCard')}} src={button2} alt="" />
      </div>
      <Footer/>
    </div>
  )
}





