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
import button1 from '../images/button1.svg'
import button2 from '../images/button2.svg'
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
    <div style={{position:"static", paddingTop:'20%'}} className='mainPageMainDiv'>
      <Header/>
      <div id='homeMainDiv'>
        <h1 className='h1HomeMainTitle'>? בעל מסעדה ? בעל עסק  <br /> !הגיע הזמן לשדרג את העסק שלך</h1>
        <h1 className='h1HomeMainTitle' style={{marginBottom:'0px',color:'rgb(214, 194, 173)',fontWeight:'normal',background:'black',border:'5px solid black',borderRadius:'10px',width:'80%'}}>MINIU - ברוכים הבאים ל</h1>
        <h1 className='h1HomeMainTitle' style={{fontSize:'30px',fontWeight:'900'}}> תפריט דיגיטלי ודפי נחיתה למסעדות ולעסקים</h1>
        <img src={MENUS} width={'90%'} alt="" />
        <h3 className='h3HomeMainTitle'>חוסכים זמן - אין צורך לחלק תפריטים ללקוחות✅</h3>
        <h3 className='h3HomeMainTitle'>חוסכים כסף - אין צורך בהדפסת הרבה תפריטים✅</h3>
        <h3 className='h3HomeMainTitle'>מתאים לכל סוגי הסמארטפונים✅</h3>
        <h3 className='h3HomeMainTitle'>מקשרים את התפריט לרשתות החברתיות✅</h3>
        <h3 className='h3HomeMainTitle'>עדכון מהיר לתפריט ללא צורך בהדפסה חדשה לתפריט חדש✅</h3>
        <h2 className='waisTime'>?אז למה לבזבז את הזמן <br />
        תשדרגו את העסק שלכם עכשיו עם <br /> התפריט הדיגיטלי
        </h2>
        <img width={'90%'} src={button1} onClick={()=>{nav('/DigitalMenu')}} alt="" />
        <img className='menuAndcatalog' width={'80%'} src={menuRestaurant} alt="" />
        <img className='menuAndcatalog' width={'80%'} src={cream} alt="" />

        
        <h1 className='h1HomeMainTitle' style={{fontSize:'25px',marginTop:'50px',paddingTop:'10px',paddingBottom:'10px',backgroundColor:'rgb(214, 194, 173)'}}>הגיע הזמן לשדרג את העסק שלכם</h1>
        <h2 className='h2HomeMainTitle'>זה הזמן לשדרג את העסק שלכם עם התפריט הדיגיטלי, ידוע לנו כמה זה חשוב דעת הלקוחות לכל עסק, לכן צריך לדאוג לנוחות של הלקוחות ולשירות הכי טוב, התפריט הדיגיטלי בחנות/במסעדה שלכם הוא אחד השידרוגים הכי חשובים כדי לתת ללקוחות את הנוחות הזו</h2>
        <h2 className='h2HomeMainTitle'>העסקים מבזבזים הרבה כסף גם על תפריטים, וזה הזמן לחסוך את הכסף הזה ולהשתמש בו כדי לקדם את העסק שלך, והשידרוג הראשון שצריך לעשות זה התפריט הדיגיטלי </h2>
        <h2 className='h2HomeMainTitle'>אנו נעמוד לשירותכם בכל ימי השבוע 24/7, ונהיה מוכנים, לכל עדכון או תיקון שתצטרכו </h2>

        <img src={scanme} width={'90%'} alt="" />
        <h2 className='h2HomeMainTitle'> QR במתנה תקבלו גם 5 סטנדים לסריקת ה </h2>
        <h1 className='h1HomeMainTitle' style={{fontSize:'40px',marginBottom:'0px'}}> אז למה ממתינים </h1>
        <div style={{marginTop:'0px',marginBottom:'10px',padding:'0px'}}>
        <img src={danger} style={{margin:'0px',padding:'0px'}} width={'10%'} alt="" /> 
        <img src={danger} style={{margin:'0px',padding:'0px'}} width={'10%'} alt="" />
        <img src={danger} style={{margin:'0px',padding:'0px'}} width={'10%'} alt="" />
        <img src={danger} style={{margin:'0px',padding:'0px'}} width={'10%'} alt="" />
        <img src={danger} style={{margin:'0px',padding:'0px'}} width={'10%'} alt="" />
        <img src={danger} style={{margin:'0px',padding:'0px'}} width={'10%'} alt="" />
        </div>
        <h2 style={{margin:'0px'}} className='h2HomeMainTitle'>? רוצים גם לקבל במתנה דף ביזניס לעסק </h2>
        <h2 style={{margin:'0px'}} className='h2HomeMainTitle'>הירשמו עכשיו </h2>
        <h2 style={{margin:'0px',marginBottom:'10px'}} className='h2HomeMainTitle'>ואנחנו ניצור איתכם קשר</h2>
        <img width={'30%'} src={mousedown} alt="" />
        <input value={Name} onChange={(e)=>{setName(e.target.value)}} className='namePhoneInput' placeholder='שם מלא/שם העסק' type="text" />
        <input value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} className='namePhoneInput' placeholder='מספר טלפון' type="text" />
        <img width={'80%'} onClick={menuSign} src={button2} alt="" />

        {/* <img style={{width:'50%',paddingBottom:'30%'}} className='logo' src={BlackMenu} alt="" /> */}
      </div>
      <div style={{marginTop:'30px'}} id='landingPageDiv'>
        <h1 style={{fontSize:'30px',backgroundColor:'rgb(214, 194, 173)',padding:'3%'}} className='h1HomeMainTitle'>  כרטיס ביקור דיגיטלי מקצועי </h1>
        <h2 className='h2HomeMainTitle'>יש לך עסק ? רוצה להקל על עצמך ועל הלקוחות שלך ? בוא נצור לך כרטיס ביקור דיגיטלי מותאם אישית לפי הבקשות שלך ולפי העיצוב שתרצה</h2>
        <img src={LANDINGPAGES} width={'95%'} alt="" />
        <h2 style={{marginBottom:'0px'}} className='h2HomeMainTitle'> תקבלו עם דף הנחיתה גם </h2>
        <h2 style={{marginTop:'0px'}} className='h2HomeMainTitle'> במתנה QR שני סטנדים לסריקת ה </h2>
        <img src={scanme} width={'90%'} alt="" />
        <h1 className='h1HomeMainTitle' style={{fontSize:'25px',backgroundColor:'rgb(214, 194, 173)',padding:'3%'}}>יתרונות של כרטיס ביקור דיגיטלי</h1>
        <h3 style={{fontSize:'15px'}} className='h3HomeMainTitle'>חיוג מהיר לעסק שלך - לחצן חיוג✅</h3>
        <h3 style={{fontSize:'15px'}} className='h3HomeMainTitle'>WhatsApp שליחת הודעת ✅</h3>
        <h3 style={{fontSize:'15px'}} className='h3HomeMainTitle'>שיתוף כרטיס הביקור הדיגיטלי ברשתות חברתיות✅</h3>
        <h3 style={{fontSize:'15px'}} className='h3HomeMainTitle'> קישור לאתר שלך✅</h3>
        <h3 style={{fontSize:'15px'}} className='h3HomeMainTitle'>  (לידים) טופס יצירת קשר ✅</h3>
        <h1 className='h1HomeMainTitle' style={{fontSize:'40px',marginBottom:'0px'}}> תפסיק לבזבז זמן</h1>
        <h2 style={{margin:'0px'}} className='h2HomeMainTitle'>הירשמו עכשיו </h2>
        <h2 style={{margin:'0px',marginBottom:'10px'}} className='h2HomeMainTitle'>ואנחנו ניצור איתכם קשר</h2>
        <img width={'30%'}  src={mousedown} alt="" />
        <input value={Name2} onChange={(e)=>{setName2(e.target.value)}} className='namePhoneInput' placeholder='שם מלא/שם העסק' type="text" />
        <input value={phoneNumber2} onChange={(e)=>{setPhoneNumber2(e.target.value)}} className='namePhoneInput' placeholder='מספר טלפון' type="text" />
        <img width={'80%'} onClick={cardSign} src={button2} alt="" />

      </div>
      <Footer/>
    </div>
  )
}






        {/* <img style={{width:'70%'}} onClick={()=>{nav('/signin')}} className='logo' src={signin} alt="" />
        <img style={{width:'70%'}} onClick={()=>{nav('/signup')}} className='logo' src={signup} alt="" />
        <img   style={{width:'70%'}} onClick={()=>{nav('/home')}} className='logo' src={guest} alt="" /> */}
